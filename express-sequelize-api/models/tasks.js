import Sequelize from 'sequelize';

module.exports = (app, sequelize) => {
  const Tasks = sequelize.define('tasks', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    done: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  });
  return Tasks;
};
