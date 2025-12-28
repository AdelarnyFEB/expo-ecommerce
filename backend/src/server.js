import express from "express";

const app = express();

app.get("/api/health", (req, res) => {
    res.status(200).send({ message: "Success" });
});

app.listen(3000, () => 
    console.log("Server is up and running on the port"));