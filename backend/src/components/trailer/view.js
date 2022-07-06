const express = require("express");
const router = express.Router();
const response = require("../../lib/response");
const controller = require("./controller");

router.get("/", function (req, res) {
  controller.getTrailer()
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, e, 500);
    });
});
router.get("/:id", function (req, res) {
  const id = req.params.id;
  controller.getOwnTrailer(id)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, e, 500);
    });
});

router.post("/", function (req, res) {
  const { actores, titulo, año, director, reseña, src, portada } = req.body;
  controller
    .addTrailer(actores, titulo, año, director, reseña, src, portada)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, e, 500);
    });
});
router.patch("/:id", function (req, res) {
  const id = req.params.id;
  const { trailer } = req.body;
  controller
    .updateTrailer(id, trailer)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, e, 500);
    });
});
router.delete("/delete/:id", function (req, res) {
  const id = req.params.id;
  controller
    .deleteTrailer(id)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, e, 500);
    });
});

module.exports = router;
