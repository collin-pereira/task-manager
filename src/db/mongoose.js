const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useUnifiedTopology: true,
    useCreateIndex: true
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



// const task = new Task({
//     description: '  Eat lunch',
//     // completed: false
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })