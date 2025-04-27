const ListenerUser = require('../models/userListenerModel');

const saveUserFromEvent = async (data) => {
  try {
    const parsedData = JSON.parse(data);

    const newUser = new ListenerUser({
      ...parsedData,
      modified_at: new Date()  
    });

    await newUser.save();
    console.log('User saved successfully in Listener Service');
  } catch (error) {
    console.error('Error saving user in Listener Service:', error);
  }
};

module.exports = { saveUserFromEvent };
