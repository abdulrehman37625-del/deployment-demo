import express  from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hello from AWS EC2 Deployment 🚀");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});