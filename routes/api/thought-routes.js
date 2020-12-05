const router = require("express").Router();
const {
  getAllThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts);

router.route("/:userId").post(createThought);

router
  .route("/:id")
  .get(getOneThought)
  .put(updateThought);

router.route('/:thoughtId/user/:userId/').delete(deleteThought);  

module.exports = router;
