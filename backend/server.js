import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import userRouter from "./routes/userRoute.js";
import { connectDB } from './config/db.js';

const app = express();
const port = process.env.PORT || 4000;

// MIDDLEWARE
// For development allow all origins (adjust for production)
app.use(cors({ origin: true, credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATABASE
const startServer = async () => {
    try {
        console.log("Connecting database...");
        await connectDB();

        // ROUTES
        app.use('/api/user', userRouter);

        app.get('/', (req, res) => {
            res.send('API WORKING');
        });

        app.listen(port, () => {
            console.log(`Server Started on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

startServer();