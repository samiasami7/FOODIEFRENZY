import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';
import itemRouter from './routes/itemRoutes.js';
import { connectDB } from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

// MIDDLEWARE
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        }
        else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
})
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATABASE
const startServer = async () => {
    try {
        console.log("Connecting database...");
        await connectDB();

        // ROUTES
        app.use('/api/user', userRouter);
        app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
        app.use('/api/items', itemRouter)

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