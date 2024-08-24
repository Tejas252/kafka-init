const {kafka} = require('./client')

async function init() {
    const admin = kafka.admin();
    console.log('Admin connecting...')
    admin.connect();
    console.log('ADMIN CONNECTION SUCCESS')

await admin.createTopics({
    topics:[{
        topic:'rider-update',
        numPartitions:2,
    }]
})

console.log('Topic created')
await admin.disconnect();
console.log('disconnected')

}

init()
