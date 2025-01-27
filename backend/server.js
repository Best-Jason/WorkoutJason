import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import workoutRoutes from './routes/workouts.js'; // Ensure to include the .js extension
import userRoutes from './routes/user.js'; // Ensure to include the .js extension
import cors from 'cors';

// express app
const app = express();

app.use(cors());
// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/workouts', workoutRoutes); // This should be protected by requireAuth
app.use('/api/user', userRoutes); // No auth required for login/signup

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
