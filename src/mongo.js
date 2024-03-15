const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/CrudDB")
.then(()=>{
    console.log("Database Connected...")
})
.catch(()=>{
    console.log("Error")
})

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    msg:{
        type: String,
        required: true
    }
})

const schema1 = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    currentLocation:{
        type: String,
        required: true
    },
    languages:{
        type: [String],
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    certifyingInstitution:{
        type: String,
        required: true
    },
    student_group:{
        type: [String],
        required: true
    },
    english_proficiency:{
        type: [String],
        required: true
    },
    experience:{
        type: [String],
        required: true
    },
    certificates:{
        type: [String],
        required: true
    },
    expTranslation:{
        type: String,
        required: true
    },
    ratePerHour:{
        type: Number,
        required: true
    },
    ratePerMonth:{
        type: Number,
        required: true
    },
    additionalInformation:{
        type: String,
        required: true
    }
    // uploadPhoto:{
    //     type: String,
    //     required: true
    // },
    // uploadCV:{
    //     type: String,
    //     required: true
    // },
    // uploadCertificates:{
    //     type: String,
    //     required: true
    // }
})

const schema2 = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    languages:{
        type: String,
        required: true
    }
}) 

const collection = new mongoose.model("employees",schema);
const collection1 = new mongoose.model("teacherData",schema1);
const collection2 =  new mongoose.model("enrollForm",schema2);

module.exports=collection
module.exports=collection1
module.exports=collection2