#! /usr/bin/env node

console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const async = require("async");
const Event = require("./models/event");
const User = require("./models/user");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const events = [];
const users = [];

function eventCreate(
  name,
  t_event,
  time,
  x_loc,
  y_loc,
  description,
  host,
  attendants,
  cb
) {
  eventdetail = {
    name: name,
    t_event: t_event,
    time: time,
    x_loc: x_loc,
    y_loc: y_loc,
    description: description,
    host: host,
  };

  if (attendants != false) eventdetail.attendants = attendants;

  // syntax for non required fields
  /* if (d_birth != false) authordetail.date_of_birth = d_birth; */

  var event = new Event(eventdetail);

  event.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Event: " + event);
    events.push(event);
    cb(null, event);
  });
}

function userCreate(
  u_name,
  password,
  f_name,
  l_name,
  type0,
  type1,
  type2,
  type3,
  tot_time,
  cb
) {
  userdetail = {
    u_name: u_name,
    password: password,
    f_name: f_name,
    l_name: l_name,
    type0: type0,
    type1: type1,
    type2: type2,
    type3: type3,
    tot_time: tot_time,
  };

  const user = new User(userdetail);
  user.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New User: " + user);
    users.push(user);
    cb(null, user);
  });
}

function createUsers(cb) {
  async.parallel(
    [
      function (callback) {
        userCreate(
          "preyas",
          "amongus",
          "Adrian",
          "Sujkovic",
          0,
          0,
          1,
          0,
          100,
          callback
        );
      },
      function (callback) {
        userCreate(
          "winerman",
          "sussy",
          "Kevin",
          "Maynard",
          0,
          3,
          0,
          0,
          150,
          callback
        );
      },
      function (callback) {
        userCreate(
          "bmoney",
          "amongssus",
          "Brian",
          "Matzelle",
          1,
          0,
          0,
          1,
          120,
          callback
        );
      },
    ],
    // optional callback
    cb
  );
}

function createEvents(cb) {
  async.parallel(
    [
      function (callback) {
        eventCreate(
          "Apple picking",
          0,
          "2023-02-07",
          42.087026,
          -75.9675312,
          "Legend says there's a secret apple tree in the union",
          users[0],
          false,
          callback
        );
      },
      function (callback) {
        eventCreate(
          "Hacking Baxter",
          1,
          "2023-02-15",
          42.0873822,
          -75.968355,
          "Using Kali Linux to figure out who Baxter really is",
          users[1],
          false,
          callback
        );
      },
      function (callback) {
        eventCreate(
          "Circle Line puzzle with Garrison",
          2,
          "2023-02-30",
          42.087647,
          -75.9718609,
          "Help garrison construct an non deterministic finite automation!",
          users[2],
          false,
          callback
        );
      },
    ],
    // optional callback
    cb
  );
}

async.series(
  [createUsers, createEvents],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("Users: " + users);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
