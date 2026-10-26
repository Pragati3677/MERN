const express = require("express");

const {
  startFinalEvaluation,
  submitFinalEvaluation,
  getMyFinalEvaluationAttempts,
} = require("../controllers/finalEvaluationAttemptController");

const {
  authenticateUser,
  authorizeRoles,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Student: start final evaluation
router.post(
  "/start",
  authenticateUser,
  authorizeRoles("student"),
  startFinalEvaluation
);

// Student: submit final evaluation
router.post(
  "/submit/:attemptId",
  authenticateUser,
  authorizeRoles("student"),
  submitFinalEvaluation
);

// Student: get own final evaluation attempts
router.get(
  "/my-attempts",
  authenticateUser,
  authorizeRoles("student"),
  getMyFinalEvaluationAttempts
);

module.exports = router;