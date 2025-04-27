const { createClient } = require('redis');

// Use the correct environment variable
const redisClient = createClient({ url: process.env.REDIS_URL });

redisClient.on('error', (err) => console.error('Redis Client Error', err));

const connectRedis = async () => {
  await redisClient.connect();
  console.log('Redis connected');
};

module.exports = { redisClient, connectRedis };
