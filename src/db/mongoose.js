const validator = require('validator')

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useUnifiedTopology: true,
    useCreateIndex: true
})

const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain the word password')
            }
        }

    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// const me = new User({
//     name : '   Collin ',
//     email: 'MyuadsalkjHKJH@Google.io',
//     password: 'phone234'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('error:'+error)
// })

const Task = mongoose.model('Task',{
    description:{
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: '  Eat lunch',
    // completed: false
})

task.save().then(()=>{
    console.log(task)
}).catch((error)=>{
    console.log(error)
})