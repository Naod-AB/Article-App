import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.myrvehk.mongodb.net/`);
    await client.connect();
    db = client.db('react-blog-app');
    cb();
}


export {
    db,
    connectToDb,
};