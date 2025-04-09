const express = require('express');
const employee = require('../models/employee');
const uuid = require('uuid');
const expense = require('../models/expense');
const profile = require('../models/profile');
const studentprofile=require('../models/studentprofile');
const studentmarks = require('../models/studentmarks');
const Department =require('../models/department');
const Program = require('../models/program');
const Subject = require('../models/subject');
const studentid = require('../models/studentid');

const stdentry = require('../models/stdentry');
const empentry = require('../models/empentry');

const Year = require('../models/Year');
const Course = require('../models/course'); 

const Month = require('../models/Month');
const ProgramMonthSelection = require('../models/ProgramMonthSelection');

const { v4: uuidv4 } = require('uuid');


const route = express.Router();

route.get('/empadd', (req, res, next) => {
    res.render('empadd');
});

route.post('/empadd', (req, res, next) => {
    //console.log(req.body);
    employee.create({
        id: uuid.v4(),
        empname: req.body.employeeName,
        empdob: req.body.dob,
        empemail: req.body.employeeEmail,
        empcontact: req.body.employeeContact,
        empaddress1: req.body.addressLine1,
        empaddress2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zip,
    }).then((result) => {
        res.send('Data Inserted Suceesfully');
    })

});
route.get('/expadd', (req, res, next) => {
    res.render('expadd');
});

route.post('/expadd', (req, res, next) => {
    //console.log(req.body);
    expense.findOne({
        where: {
            expname: req.body.expenseName
        }
    }).then((result) => {
        if (result) {
            res.send('Data exists');
        } else {
            expense.create({
                id: uuid.v4(),
                expname: req.body.expenseName,
                amt: req.body.amount,
                expdt: req.body.expenseDate,
                expcategory: req.body.expenseCategory,
            }).then((result1) => {
                res.send('Data Inserted Suceesfully');
            });
        }
    })
});
route.get('/proadd', (req, res, next) => {
    res.render('proadd');
});


route.post('/proadd', (req, res, next) => {
    //console.log(req.body);
    profile.findOne({
        where: {
            email: req.body.email
        }
    }).then((result) => {
        if (result) {
            res.send('Data exists');
        } else {
            profile.create({
                id: uuid.v4(),
                profilename: req.body.profilename,
                profiletype: req.body.profiletype,
                description: req.body.description,
                email: req.body.email,
                phone: req.body.phone,
                type: req.body.type,
            }).then((result1) => {
                res.send('profile created sucessfully');
            });
        }
    })
});
route.get('/studentp&m', (req, res) => {
    res.render('studentp&m'); 
})
route.post('/studentp&m', (req, res) => {
    var studentId=uuid.v4();
    studentprofile.create({
        id:studentId,
        name: req.body.name,
        age: req.body.age,
        school: req.body.school
    }).then(studentprofile => {
        studentmarks.findOne({
            where: {
                studentId: studentId,
                subject: req.body.subject
            }
        }).then(existingMarks => {
            if (existingMarks) {
                res.status(400).send('Marks for this subject have already been entered.');
            } else {
                studentmarks.create({
                    id: uuid.v4(),
                    studentId: studentId,
                    subject: req.body.subject,
                    fullMarks: req.body.fullMarks,
                    marksObtained: req.body.marksObtained
                }).then((result)=>{
                    res.send('Student Profile and Marks added successfully');
                });
            }
        });
    });
});
route.get("/dps", (req, res) => {
    res.render("dps");
  });
  
  route.post("/dps", async (req, res) => {
    try {
        const deptid = uuid.v4();
        const progid = uuid.v4();
      const department = await Department.create({
        id: deptid,
        dept_name: req.body.dept_name,
        dept_code: req.body.dept_code,
        dept_desc: req.body.dept_desc,
      });
  
      const program = await Program.create({
        id: progid,
        dept_id: deptid,
        prog_name: req.body.prog_name,
        prog_code: req.body.prog_code,
        prog_duration: req.body.prog_duration,
        prog_status: req.body.prog_status,
      });
  
      const subject = await Subject.create({
        id: uuid.v4(),
        prog_id: progid,
        subject_name: req.body.subject_name,
        subject_code: req.body.subject_code,
        subject_desc: req.body.subject_desc,
      });
  
      res.send("Data inserted successfully!");
    } catch (error) {
      res.status(500).send("Error inserting data: " + error.message);
    }
  });
  route.get('/studentid', (req, res, next) => {
    res.render('studentid');
});
route.post('/studentid', (req, res, next) => {
    //console.log(req.body);
    profile.findOne({
        where: {
            email: req.body.email
        }
    }).then((result) => {
        if (result) {
            res.send('Data exists');
        } else {
            profile.create({
                id: uuid.v4(),
                firstname: req.body.firstName,
                lastname: req.body.lastName,
                phone: req.body.phoneNumber,
                email: req.body.email,
                address1: req.body.address1,
                address2: req.body.address2,
                pincode: req.body.pincode,
            }).then((result1) => {
                res.send(' data inserted sucessfully');
            });
        }
    })
});

route.get('/stdentry', (req,res)=>{
    return res.render('stdentry');
})

route.post('/stdentry', (req,res)=>{

    let frmdata = req.body;
    stdentry.create({
        id:uuid.v4(),
        studentid:frmdata.studentid,
        firstname:frmdata.firstname,
        lastname:frmdata.lastname,
        phone:frmdata.phone,
        email: frmdata.email,
    address1: frmdata.address1,
    address2: frmdata.address2, 
    pincode: frmdata.pincode,
    }).then(()=>{
        return res.status(200).send({
        message: 'Data inserted successfully',
    });
    });
    
});
route.get('/empentry', (req, res) => {
    return res.render('empentry');
});

route.post('/empentry', (req, res) => {
    let frmdata = req.body;
    empentry.create({
        id: uuid.v4(),
        empid: frmdata.empid,
        firstname: frmdata.firstname,
        lastname: frmdata.lastname,
        dept: frmdata.dept,
        status: frmdata.status,
    }).then(() => {
        return res.status(200).send({
            message: 'Employee data inserted successfully',
        });
    });
});



route.get('/empdtls', (req,res)=>{

    empentry.findAll().then((emps)=>{

        var allemps = emps.map((employee)=>{
            return{
                id:employee.id,
                empid:employee.empid,
                firstname:employee.firstname,
                lastname:employee.lastname,
                dept:employee.dept,
                status:employee.status,
            }
        });

        return res.render('empdtls',{allemps:allemps});
    });
});

route.get('/submit', (req, res) => {
    return res.render('submit');
});

route.get('/submit', (req, res) => {
    return res.render('submit');
});

route.post('/submit', async (req, res) => {
    try {
        // Retrieve the selected year
        const yearValue = parseInt(req.body.year);
        const [year, createdYear] = await Year.findOrCreate({ where: { year: yearValue } });

        // List of courses and months
        const courses = ["MBA", "BBA", "MTECH", "BTECH", "BCA", "BSC", "MSC"];

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // Loop through each course and month to check if the checkbox was selected
        for (const courseName of courses) {
            const [course, createdCourse] = await Course.findOrCreate({ where: { name: courseName } });
            
            for (const monthName of months) {
                const [month, createdMonth] = await Month.findOrCreate({ where: { name: monthName } });
                
                const checkboxName = `${courseName}_${monthName}`;
            

                // Save the selection in the database
                await ProgramMonthSelection.create({
                    yearId: year.id,
                    programId: course.id, // Updated to reflect 'course'
                    monthId: month.id,
                    
                });
            }
        }

        res.send('Data inserted successfully');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error inserting data: ' + error.message);
    }
});

// Route to render form
route.get('/marksform', (req, res) => {
    res.render('marksform'); 
});
route.post('/marksform', async (req, res) => {
 {
        const marksData = req.body;

       
        }

        const insertPromises = req.body.assignment.map(data =>
            Studentmarks.create({
                id: uuid.v4(),
                subjectname: data.subjectname,
                assignmentname: data.assignmentname,
                marks: data.marks,
            })
        );

        await Promise.all(insertPromises);

        res.status(201).send('Marks submitted successfully');
});



route.get('/marksform', async (req, res) => {
    try {
        const studentMarks = await Studentmark.findAll(); 
        res.render('marksform', { studentMarks });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

module.exports = route;
