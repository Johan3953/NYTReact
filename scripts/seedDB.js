const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Articles collection and inserts the Articles below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytSearch",
  {
    useMongoClient: true
  }
);

const articleSeed = [
{
  title: 'Tesla the Car Is a Household Name. Long Ago, So Was Nikola Tesla',
  date: '2018-01-11T16:44:43-05:00',
  url: 'https://www.nytimes.com/2017/12/30/technology/nikola-tesla.html'
}
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
