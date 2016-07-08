import r from 'rethinkdb';
import val from 'lx-valid';
import config from '../config.js';

module.exports = (app, dbConn) => {
  const Tasks = {
    tableName: 'tasks',
    fields: {
      properties: {
        name: {
          type: 'string',
          trim: true,
          required: true
        },
        done: {
          type: 'boolean'
        }
      }
    },
    validate(data, isUpdate = false) {
      const { schema } = config.model;
      schema.isUpdate = isUpdate;
      const validate = val.getValidationFunction();
      return validate(data, this.fields, schema);
    },
    list(done) {
      r.table(this.tableName)
        .run(dbConn)
        .then(cursor => {
          cursor.toArray()
            .then(tasks => done(null, tasks))
            .error(err => done(err))
          ;
        })
        .error(err => done(err))
      ;
    },
    get(taskId, done) {
      r.table(this.tableName)
        .get(taskId)
        .run(dbConn)
        .then(task => done(null, task))
        .error(err => done(err))
      ;
    },
    insert(task, done) {
      const validation = this.validate(task, false);
      if (validation.valid) {
        r.table(this.tableName)
          .insert(task)
          .run(dbConn)
          .then(result => {
            r.table(this.tableName)
              .get(result.generated_keys[0])
              .run(dbConn)
              .then(newTask => done(null, newTask))
              .error(err => done(err))
            ;
          })
          .error(err => done(err))
        ;
      } else {
        done(validation.errors);
      }
    },
    update(taskId, task, done) {
      const validation = this.validate(task, true);
      if (validation.valid) {
        r.table(this.tableName)
          .get(taskId)
          .update(task, config.model.update)
          .run(dbConn)
          .then(result => {
            const { new_val } = result.changes[0] || {};
            done(null, new_val);
          })
          .error(err => done(err))
        ;
      } else {
        done(validation.errors);
      }
    },
    delete(taskId, done) {
      r.table(this.tableName)
        .get(taskId)
        .delete()
        .run(dbConn)
        .then(() => done(null))
        .error(err => done(err))
      ;
    }
  };
  return Tasks;
};
