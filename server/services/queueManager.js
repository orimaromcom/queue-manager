const fs = require("fs").promises;
const path = require("path");

const QUEUE_DIR = path.join(__dirname, "queues");

fs.mkdir(QUEUE_DIR, { recursive: true }).catch(console.error);

async function readQueue(queueName) {
  const filePath = path.join(QUEUE_DIR, `${queueName}.json`);
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function writeQueue(queueName, queue) {
  const filePath = path.join(QUEUE_DIR, `${queueName}.json`);
  await fs.writeFile(filePath, JSON.stringify(queue));
}

module.exports = { readQueue, writeQueue };
