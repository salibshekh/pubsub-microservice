const { v4: uuidv4 } = require('uuid');
const User = require('../models/userModel');
const { redisClient } = require('../configuration/redisConfig');

const createUser = async (req, res) => {
  try {
    const { user, class: className, age, email } = req.body;

    if (!user || !className || !age || !email) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newUser = new User({
      id: uuidv4(),
      user,
      class: className,
      age,
      email,
      inserted_at: new Date()
    });

    await newUser.save();

    await redisClient.publish('new-user', JSON.stringify(newUser));

    return res.status(201).json({ message: 'User saved and published successfully.' });

  } catch (error) {
    console.error('Error in createUser:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createUser };
