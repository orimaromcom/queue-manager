const { readQueue, writeQueue } = require("./queueManager");

async function addMessage(queueName, message) {
  const queue = await readQueue(queueName);
  queue.push(message);
  await writeQueue(queueName, queue);
}

async function getMessage(queueName, timeout = 10000) {
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    const queue = await readQueue(queueName);
    if (queue.length > 0) {
      const message = queue.shift();
      await writeQueue(queueName, queue);
      return message;
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  return null;
}

module.exports = { addMessage, getMessage };
