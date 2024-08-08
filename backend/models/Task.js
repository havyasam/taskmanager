const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    updatedAt: { type: Date, default: Date.now },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports =  mongoose.model('Task', TaskSchema);
