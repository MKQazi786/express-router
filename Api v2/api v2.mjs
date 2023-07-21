import express from "express";

const app = express();

app.use("/api/v2", authRouter)

app.use((req, res, next) => {
    if (token === "valid") {
        next();
    } else {
        res.send({ message: "invalid token" })
    }
})

app.use("/api/v1", commentRouter)

app.use("/api/v1", feedRouter)

app.use("/api/v1", postRouter)






