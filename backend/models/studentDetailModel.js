const mongoose = require('mongoose');


const studentDetailsSchema = new mongoose.Schema({
    name: String,
    teacher: String,
    courses_inprogress: [String],
    courses_completed: [String],
    skills_acquired: [String],
    retention_rate: Number,
    percentile: Number,
    total_quizzes: Number,
    quizzes_attempted: [Object],
    passed: Number
});


const studentDetail = mongoose.model('Student', studentDetailsSchema);

module.exports = studentDetail;

