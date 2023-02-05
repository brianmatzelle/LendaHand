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

exports.event_create_post = [
  //  Convert attendants to array
  (req, res, next) => {
    if (!Array.isArray(req.body.attendants)) {
      req.body.attendants =
        typeof req.body.attendants === "undefined" ? [] : [req.body.genre];
    }
    next();
  },
  //  Validate and sanitize data
  body("name", "Event name can't be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("t_event").escape(),
  body("date", "Invalid Date").escape(),
  body("x_loc").escape(),
  body("y_loc").escape(),
  body("description").escape(),
  body("host").escape(),
  body("attendants.*").escape(),
  //  process request
  (req, res, next) => {
    // errors
    const errors = validationResult(req);
    //  event object
    const event = new Event({
      name: req.body.name,
      t_event: req.body.t_event,
      date: req.body.date,
      x_loc: req.body.x_loc,
      y_loc: req.body.y_loc,
      description: req.body.description,
      host: req.body.host,
      attendants: req.body.attendants,
    });
    //  error stuff
    if (!errors.isEmpty()) {
      res.send({ event: req.body, errors: errors.array() });
    }
    //  data gucci
    event.save((err) => {
      if (err) {
        return next(err);
      }
      //res.redirect(event.url);
    });
  },
];

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
