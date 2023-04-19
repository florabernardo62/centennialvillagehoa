// Requirement: Have a folder structure that meets the MVC paradigm
// Java Script that stores data kept under the models folder
// Requirement: Use MySQL and the Sequelize ORM for the database
//source: https://www.npmjs.com/package/mysql
const Sequelize = require('sequelize');
// Requirement: Protect API keys and sensitive information with environment variables
const sequelize = new Sequelize('hoa_fees', 'root', process.env.sensitive_information, {
// sensitive_information is a environmental variable that stores mysql password 
  host: 'localhost',
  dialect: 'mysql'
});
// Requirement Use MySQL and the Sequelize ORM for the database
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

const Homeowner = sequelize.define('homeowner', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    paid_monthly_fee: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    rooftop_reformation_bill: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0,
    },
    fine: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0,
    },
});


sequelize.sync()
  .then(() => {
    // Create 3 homeowners
    Homeowner.create({
      name: 'Mark Thompson',
      email: 'MarkThompon@gmail.com',
      phone_number: '4709817251',
      address: '3182 Genesis Way',
    });

    Homeowner.create({
      name: 'Flora Bernardo',
      email: 'florabernardo@gmail.com',
      phone_number: '4709817251',
      address: '3182 Genesis Way',
    });

    Homeowner.create({
      name: 'Sam Blair',
      email: 'Samblair@gmail.com',
      phone_number: '4709817251',
      address: '3182 Genesis Way',
    });
  })
  .catch(err => console.error('Unable to sync database:', err));

module.exports = Homeowner;
