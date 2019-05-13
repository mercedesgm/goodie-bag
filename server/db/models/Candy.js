const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        default: 0,
        validate: {
            max: 10
        }
    },
    imageUrl: {
        // need to use a default
        type: Sequelize.STRING,
    }
});
