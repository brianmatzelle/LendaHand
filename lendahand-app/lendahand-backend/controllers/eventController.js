const Event = require("../models/event");

exports.index = (req, res) => {
  res.send("NOT IMPLEMENTED: HOME PAGEeeeeeeee");
};

exports.event_list = function (req, res, next) {
  Event.find()
    .sort([["name", "ascending"]])
    .exec(function (err, list_events) {
      if (err) {
        return next(err);
      }
      //  success, render
      res.send(list_events);
    });
};

exports.event_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: ${req.params.id}`);
};

exports.event_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: event create get");
};

exports.event_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: event create post");
};

exports.event_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: event delete get");
};

exports.event_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: event delete post");
};

exports.event_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: event update get");
};

exports.event_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: event update post");
};
