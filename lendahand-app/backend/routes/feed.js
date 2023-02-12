const express = require("express");
const router = express.Router();

const event_controller = require("../controllers/eventController");
//const user_controller = require("../controllers/userController");

//              Event Routes            //

//  Get feed home page
router.get("/", event_controller.index);

//  GET request for making an event
router.get("/event/create", event_controller.event_create_get);

//  POST request for making an event
router.get("/event/create", event_controller.event_create_post);

//  GET request for deleting an event
router.get("/event/:id/delete", event_controller.event_delete_get);

//  POST request for deleting event
router.get("/event/:id/delete", event_controller.event_delete_post);

//  GET request for updating a book
router.get("/event/update", event_controller.event_update_get);

//  POST request for updating a book
router.get("/event/update", event_controller.event_update_post);

//  GET request for an event
router.get("/event/:id", event_controller.event_detail);

//  GET request for list of all events
router.get("/events", event_controller.event_list);

//                  User Routes                     //

module.exports = router;
