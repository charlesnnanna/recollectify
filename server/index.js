
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';

const app = express();

//Middleware to parse json and form data
app.use(bodyParser.json({ limit: '30mb'}))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

//Hanlde Cross Origin Resource Shaaring
app.use(cors());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://charlesuthulor:metaphor@cluster0.qnx1jex.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);