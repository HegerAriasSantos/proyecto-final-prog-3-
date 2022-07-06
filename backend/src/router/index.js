// const express = require("express");
const trailer = require("../components/trailer/view");
const user = require("../components/user/view");

const routes = function (server) {
  server.use("/trailer", trailer);
  server.use("/user", user);
};
module.exports = routes;

