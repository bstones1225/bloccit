const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController")
const validation = require("./validation");
const helper = require("../auth/helpers");

router.get("/topics/:topicId/posts/new",
  helper.ensureAuthenticated,
  validation.validatePosts,
  postController.new);
router.post("/topics/:topicId/posts/create",
  helper.ensureAuthenticated,
  validation.validatePosts,
  postController.create);
router.get("/topics/:topicId/posts/:id",
  helper.ensureAuthenticated,
  validation.validatePosts,
  postController.show);
router.post("/topics/:topicId/posts/:id/destroy",
  helper.ensureAuthenticated,
  postController.destroy);
router.get("/topics/:topicId/posts/:id/edit",
  helper.ensureAuthenticated,
  validation.validatePosts,
  postController.edit);
router.post("/topics/:topicId/posts/:id/update",
  helper.ensureAuthenticated,
  validation.validatePosts,
  postController.update);


module.exports = router;
