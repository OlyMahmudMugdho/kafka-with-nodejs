// createTopic.js
const kafka = require('./kafkaClient');

const admin = kafka.admin();

const createTopic = async () => {
  await admin.connect();
  await admin.createTopics({
    topics: [
      {
        topic: 'test-topic',
        numPartitions: 1,
        replicationFactor: 1
      }
    ]
  });
  await admin.disconnect();
};

createTopic().catch(console.error);
