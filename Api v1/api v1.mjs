import express from "express";

const app = express();

app.use((req, res, next) => {
    if (token === "valid") {
        next();
    } else {
        res.send({ message: "invalid token" })
    }
})







