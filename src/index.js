const express = require('express')
const app = express()
const path = require('path')
const collection = require('./mongo')
const collection1 =require('./mongo')
const collection2 =require('./mongo')
const multer = require('multer')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const staticPath = path.join(__dirname,"../public");

// builtin middleware
app.use(express.static(staticPath));

// set up for upload storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });

// Initialize multer middleware
const upload = multer({ storage: storage });

app.post('/sendMsg',async(req,res)=>{

    var name = req.body.fname;
    var email = req.body.email;
    var msg = req.body.msg;

    var data={
        "name" : name,
        "email": email,
        "msg": msg
    }

    await collection.insertMany([data])
    res.send("Sent")

});

// second form data - registeration form
app.post('/submit_form', upload.fields([
  { name: 'uploadPhoto', maxCount: 1 }, 
  { name: 'uploadCV', maxCount: 1 }, 
  { name: 'uploadCertificates', maxCount: 5 }
]), async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const gender = req.body.gender || [];  // checkbox
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const currentLocation = req.body.currentLocation;
  const languages = req.body.languages || []; // multiple selection option
  const qualification = req.body.qualification; // dropdown option
  const certifyingInstitution = req.body.certifyingInstitution;
  const student_group = req.body.student_group || []; // checkbox
  const english_proficiency = req.body.english_proficiency; // checkbox
  const experience = req.body.experience || []; // checkbox
  const certificates = req.body.certificates || []; // checkbox
  const expTranslation = req.body.expTranslation;
  const ratePerHour = req.body.ratePerHour;
  const ratePerMonth = req.body.ratePerMonth;
  const additionalInformation = req.body.additionalInformation;
  // const uploadPhoto = req.files['uploadPhoto'][0];
  // const uploadCV = req.files['uploadCV'][0];
  // const uploadCertificates = req.files['uploadCertificates'];

  const data = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    email: email,
    phoneNumber: phoneNumber,
    currentLocation: currentLocation,
    languages: languages,
    qualification: qualification,
    certifyingInstitution: certifyingInstitution,
    student_group: student_group,
    english_proficiency: english_proficiency,
    experience: experience,
    certificates: certificates,
    expTranslation: expTranslation,
    ratePerHour: ratePerHour,
    ratePerMonth: ratePerMonth,
    additionalInformation: additionalInformation,
    // uploadPhoto: uploadPhoto,
    // uploadCV: uploadCV,
    // uploadCertificates: uploadCertificates,
  };

  console.log(data);

  try {
    await collection1.insertMany([data]);
    console.log('Data inserted successfully into the database');

    res.send('Data inserted successfully into the database');
  } catch (error) {
    console.error('Error inserting data into the database:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Enrollment form - third form
app.post('/enroll',async(req,res)=>{
    var fullName = req.body.fullName;
    var email = req.body.email;
    var phone = req.body.phone;
    var age = req.body.age;
    var languages =req.body.languages;

    var data2={
      "fullName" : fullName,
      "email": email,
      "phone": phone,
      "age": age,
      "languages":languages
  }

  await collection2.insertMany([data2])
  console.log(data2)
  res.send("Successfully Enrolled");

})


app.listen(3000,()=>{
    console.log("port connected");
})