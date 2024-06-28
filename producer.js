// producer.js
const kafka = require('./kafkaClient');
const { Partitioners } = require('kafkajs')

const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner });

const produceMessage = async () => {
  await producer.connect();
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'My custom message' }
    ]
  });
  await producer.disconnect();
};

produceMessage().catch(console.error);
