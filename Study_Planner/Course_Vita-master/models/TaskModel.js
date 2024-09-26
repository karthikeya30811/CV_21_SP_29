const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true 
},
  description: { type: String },
  deadline: { type: Date },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
  completed: { type: Boolean, default: false },
  
  ExpectedTime: { type: Number, default: 0 },
  userPreferences: {type: String,required: true},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("task", taskSchema);