const { Kafka } = require("kafkajs");

async function consume() {
    const kafka = new Kafka({
        clientId: "player-jersey-1",
        brokers: ["127.0.0.1:9092"],
    });

    const consumer = kafka.consumer({groupId:"jersey"});
    await consumer.connect();
    console.log("Consumer connected");
    await consumer.subscribe(
        {
            topic: "jersey",
            fromBeginning: true
        }
    )

    await consumer.run({
        eachMessage: async(topic,partition,message)=>{
            //1topic
            //2partition
            //3message console.log('To partition ${partition} -> message ${message.value.tostring})
            
            console.log(
                `To Partition ${partition} -> message ${message.value.toString()}`
            );
        }
    })

}
consume();