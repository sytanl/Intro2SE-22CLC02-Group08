const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    notificationID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    receiverID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);