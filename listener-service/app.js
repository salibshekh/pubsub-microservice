const dotenv = require('dotenv');
const { redisClient, connectRedis } = require('./configuration/redisConfig');
const connectDB = require('./configuration/dbMaster');
const { saveUserFromEvent } = require('./controller/listenerController');

dotenv.config();

const startServer = async () => {
  try {
    await connectDB();
    await connectRedis();

    console.log('Listener Service is Running');

    // Subscribe to 'new-user' channel
    await redisClient.subscribe('new-user', async (message) => {
      console.log('New message received:', message);
      await saveUserFromEvent(message);
    });

  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
