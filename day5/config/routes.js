var express = require("express");

var routes = express.Router(); // Routing Method -- .get(), .post(). put(), .delete(). use()
// xxxxxxxxxxx ---- Application Method .set(), .listen()


routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
routes.use("/contact", require("../controllers/contact"));
routes.use("/login", require("../controllers/login"));

routes.use("/help", require("../controllers/help"));




module.exports = routes;

/*                                   Controllers                        



        :3000/       ----------------->home.js

        :3000/about ----------------->about.js
        :3000/about/info
        :3000/about/demo

        :3000/contact -------------->contact.js
        :3000/contact/submit 
        :3000/contact/hello


        :3000/login ----------------->login.js
        :3000/login/save









*/