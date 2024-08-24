const {kafka} = require('./client')

async function init() {
    const producer = kafka.producer();

    console.log('Connecting producer')
    await producer.connect();
    console.log('producer connected Successfully')

    await producer.send({
        topic:'rider-update',
        messages:[
            {
                key:'location-update',
                value:'rider-1-gujarat',
                partition:0
            }
        ]
    })

    await producer.disconnect()

} 

init()