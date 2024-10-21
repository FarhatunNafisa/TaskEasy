import express from "express"; //import library express
import "dotenv/config";
import{db} from "./configs/db.js";
const app = express(); //library express initialized
const PORT = 4000; // port variable untuk memverifikasi port yang kita pakai

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello world",
    });
});

//route/path
app.use('*', (req, res) => {
    res.status(404).json({
        message: "Not found",
    });
});

//Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
