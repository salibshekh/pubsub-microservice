const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./configuration/dbMaster');
const { connectRedis } = require('./configuration/redisConfig');
const indexRoutes = require('./routes/indexRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/v1', indexRoutes);

const startServer = async () => {
  try {
    await connectDB();
    await connectRedis();

    app.listen(process.env.PORT, () => {
      console.log(`Receiver Service running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Error while starting server:', error.message);
    process.exit(1); // forcefully exit if connection fails
  }
};


startServer();
