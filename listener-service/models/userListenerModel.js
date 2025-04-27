const mongoose = require('mongoose');

const userListenerSchema = new mongoose.Schema({
  id: { type: String, required: true },
  user: { type: String, required: true },
  class: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  inserted_at: { type: Date, required: true },
  modified_at: { type: Date, required: true },
});

module.exports = mongoose.model('ListenerUser', userListenerSchema);
