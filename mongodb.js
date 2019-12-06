//CRUD operations

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to the database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Collin',
    //     age: 22
    // },(error, result)=>{
    //     if(error){
    //         return console.log('Unable to inset user')
    //     }
    // })
    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed:true
        },
        {
            description: 'Renew inspection',
            completed: false
        },
        {
            description: 'Pot plants',
            completed: false
        }
    ],(error, result)=>{
        if(error){
            return console.log('Unable to insert tasks')
        }
        console.log(result.ops)
    })
})