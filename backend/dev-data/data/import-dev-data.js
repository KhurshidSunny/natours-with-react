const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');
const { isUtf8 } = require('buffer');

dotenv.config({ path: './config.env' });

// connection string
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB Connection Successful!'));

// READ JS FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// IMPORT DATA INTO DB
async function importData() {
  try {
    await Tour.create(tours);
    console.log('Data Successfully loaded!');
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
}

// DELETE ALL DATA FROM DB
async function deleteData() {
  try {
    await Tour.deleteMany();
    console.log('Data Successfully deleted!');
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
}

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);
