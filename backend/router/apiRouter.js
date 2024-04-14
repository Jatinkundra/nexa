const express = require("express");
const Chart = require("../models/chartModel");
const studentDetail = require("../models/studentDetailModel");
const router = express.Router();
const Teacher = require('../models/teacherModel.js');
const Campaign = require('../models/campaignsModel.js')

router.get("/test", (req, res) => {
  console.log("hilex test running successfully!")
  res.send("hilex test running successfully!");
});

router.post('/teachers', async (req, res) => {
  try {
    const newTeacher = new Teacher(req.body);
    console.log(req.body)
    await newTeacher.save();
    res.status(201).send(newTeacher);
  } catch (error) {
    console.log(error)
    res.status(400).send(JSON.stringify(error));
  }
});

router.post('/campaigns', async (req, res) => {
  try {
    // Create a new campaign using the data sent in the request body
    const newCampaign = new Campaign(req.body);

    // Save the campaign to the database
    const savedCampaign = await newCampaign.save();

    res.status(201).json(savedCampaign);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

router.get('/campaigns', async (req, res) => {
  const campaignType = req.query.type;
  console.log(campaignType)

  try {
    if (!campaignType) {
      return res.status(400).send('Campaign type is required');
    }

    const campaigns = await Campaign.find({ 'type': campaignType });

    if (campaigns.length === 0) {
      return res.status(404).send('No campaigns found for the given type');
    }

    res.json(campaigns);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.get('/teachers/teacherCourses/:teacherName', async (req, res) => {
  try {
    const teacherName = req.params.teacherName;
    const teacher = await Teacher.findOne({ name: teacherName });
    if (!teacher) {
      return res.status(404).json({ code: 404, message: 'Teacher not found' });
    }

    let courses = [];

    teacher.courses.forEach(course => {
      courses.push(course.title);
    });

    res.status(200).json({ courses: [courses] })
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/courses/:courseId', async (req, res) => {
  try {
    const teacher = await Teacher.findOne();
    if (!teacher) {
      return res.status(404).json({ code: 404, message: 'Course not Found' });
    }

    const courses = teacher.courses[0];
    res.status(200).json({ courses: [courses] })
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
}
);

router.get('/courses', async (req, res) => {
  try {
    const teacher = await Teacher.findOne();
    if (!teacher) {
      return res.status(404).json({ code: 404, message: 'Course not Found' });
    }
    const courses = teacher.courses
    res.status(200).json({ courses: [courses] })
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
}
);

router.get('/chartdata/:title', async (req, res) => {
  try {
    const title = req.params.title;
    const chart = await Chart.findOne({ title: title });
    if (!chart) {
      return res.status(404).json({ code: 404, message: 'Teacher not found' });
    }
    res.status(200).json({ chart });
  }
  catch (error) {
    res.status(500).json({ err: error.message });
  }
}
);


router.post('/chart/createChart', async (req, res) => {
  try {
    const newChart = new Chart(req.body);
    await newChart.save();
    res.status(201).send(newChart);
  } catch (error) {
    res.status(400).send(error);
  }
});


router.get('/student/studentDetails/:name', async (req, res) => {
  try {
    const name = req.params.name;
    const studentDetails = await studentDetail.findOne({ name: name });
    if (!studentDetails) {
      return res.status(404).json({ code: 404, message: 'Teacher not found' });
    }
    res.status(200).json({ studentDetails });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
}
);

router.post('/student/createStudent', async (req, res) => {
  try {
    const newStudent = new studentDetail(req.body);
    await newStudent.save();
    res.status(201).send(newStudent);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});



module.exports = router;