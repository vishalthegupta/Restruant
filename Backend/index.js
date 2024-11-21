import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
const app = express();
import userRoute from './route/user.route.js'
import cors from 'cors';

app.use(cors());
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;



try {
    mongoose.connect(URI)
    console.log("Connected to MongoDB")
}
  catch(error) {
    console.log("Error " , error)
  }


app.use('/user' , userRoute)


app.listen(PORT, () => {
    console.log(`Port is ${PORT}`);
});
