const express = require("express");
const { addMessage, getMessage } = require("../services/services");

const router = express.Router();

router.post("/:queueName", async (req, res) => {
  try {
    const { queueName } = req.params;
    await addMessage(queueName, req.body);
    res.status(201).json({ message: "Message added to queue" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:queueName", async (req, res) => {
  const { queueName } = req.params;
  const timeout = parseInt(req.query.timeout) || 10000;

  try {
    const message = await getMessage(queueName, timeout);
    if (message) {
      res.json(message);
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
module.exports = router;
