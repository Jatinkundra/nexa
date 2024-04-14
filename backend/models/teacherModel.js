const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  ID: String,
  Name: String,
  Marks: String,
  Attendence: String,
  Percentage: String
});

const courseSchema = new mongoose.Schema({
  title: String,
  studentsEnrolled: String,
  dailyAttendance: String,
  likeScore: Number,
  course_rating: Number,
  description: String,
  students_data: [studentSchema]
});

const teacherSchema = new mongoose.Schema({
  name: String,
  courses: [courseSchema]
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
