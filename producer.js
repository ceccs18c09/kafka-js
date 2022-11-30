const {Kafka} = require("kafkajs")
const msg = "hello";
async function run(){
    try
    {
         const kafka = new Kafka({
              "clientId": "myapp",
              "brokers" :["localhost:9092"]
         })

        const producer = kafka.producer();
        console.log("Connecting.....")
        await producer.connect()
        console.log("Connected!")
        //A-M 0 , N-Z 1 
        const partition = msg
        const result =  await producer.send({
            "topic": "User",
            "messages": [
                {
                    "value": '99',
                    "partition": 1
                }
            ]
        })
        
    }
    catch(ex)
    {
        console.error(`Something bad happened ${ex}`)
    }


}
run();