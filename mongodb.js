const { MongoClient, ObjectId } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const client = new MongoClient(connectionUrl)

async function main() {

    await client.connect()
    const db = client.db(databaseName)

    //const id = new ObjectId()

    const insertOne = await db.collection('users').insertOne({
        //_id: id,
        name: 'Guada',
        age: 30
    })

    console.log(insertOne)

    const insertMany = await db.collection('users').insertMany([
        {
            name: 'Sirius',
            age: 3
        }, {
            name: 'Cala',
            age: 5
        }])

    console.log(insertMany)

    const tasks = await db.collection('tasks').insertMany([
        {
            description: 'Document 1',
            completed: true
        }, {
            description: 'Document 2',
            completed: false
        }, {
            description: 'Document 1',
            completed: true
        }
    ])

    console.log(tasks)

    const user = await db.collection('users').findOne({
        name: "Sirius"
    })

    console.log(user)

    const users = await db.collection('users').find({
        age: 30
    }).toArray()

    console.log(users)

    const updateOne = await db.collection('users').updateOne({
        name: "Sirius"
    }, {
        $set: {
            age: 2
        }
    })

    console.log(updateOne)


}

main()
    .then(console.log('Success'))
    .catch()
    .finally(() => client.close());
