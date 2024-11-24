import express from "express"; //import library express
import "dotenv/config";
import userRouter from './routes/user.route.js';
import { errorHandler } from "./middleware.js";

const app = express(); //library express initialized

const PORT = process.env.PORT; 
app.use(express.json());
app.use("/api/v1/users", userRouter);

// Middleware untuk menangani 404
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
});

// Middleware untuk menangani error
app.use(errorHandler);

//Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});