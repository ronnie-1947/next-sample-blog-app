// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {MongoClient} from 'mongodb'

export default async (req, res) => {
  if(req.method === 'POST'){

    const {email, name, message} =  req.body
    if(
      !email||
      !email.includes('@')||
      !name ||
      name.trim() === '' ||
      !message || 
      message.trim() === ''
    ){
      res.status(422).json({message: 'Invalid Input'})
      return
    }

    const newMessage = {email, name, message}
    let client
    
    try {
      client = await MongoClient.connect('mongodb://mongodb/trashApp')
      
    } catch (error) {
      res.status(500).json({message: 'Something went wrong.'})
    }

    const db = client.db()

    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      client.close()
      res.status(500).json({message: 'Error storing message in database'})
      return
    }
    
    
    client.close()
    res.status(201).json({message: 'Successfully stored message'})

  }
}
