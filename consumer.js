const {kafka} = require('./client')

async function init(){
    const consumer = kafka.consumer({groupId:'rider-group'})

    await consumer.connect()

    await consumer.subscribe({
        topics:['rider-update'],
        fromBeginning:true
    })

    await consumer.run({
        eachMessage: async ({topic,message,partition}) => {
            console.log(`[${topic}] : ${partition} -`,message?.value?.toString())
        }
    })

    // await consumer.disconnect()
}

init()