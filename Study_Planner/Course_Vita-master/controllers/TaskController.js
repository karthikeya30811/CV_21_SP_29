const Task=require('../models/TaskModel')
const { json } = require("express");
const jsonwebtoken = require('jsonwebtoken');
const dotenv=require("dotenv");
dotenv.config()

const insertTask = async (req, res) => {
    try {
        const { title, description, deadline, priority, difficulty, ExpectedTime} = req.body
        let decoded_tkn=jsonwebtoken.decode(req.headers['w-access-token'],process.env.SECRET,algorithms=["HS256"])
        let userPreferences=decoded_tkn.id
        const newTask = new Task({
            title,
            description,
            deadline,
            priority,
            difficulty,
            ExpectedTime,
            userPreferences,
        });

        await newTask.save();
        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        res.status(500).json({ error: 'Error creating task', details: error.message });
    }
};

module.exports = {insertTask}