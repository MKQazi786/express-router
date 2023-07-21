import express from "express";

let router = express.Router()

import { authRouter } from "./Api v1/routes/auth.mjs";
import { commentRouter } from "./Api v1/routes/comment.mjs";
import { feedRouter } from "./Api v1/routes/feed.mjs";
import { postRouter } from "./Api v1/routes/post.mjs";


router.use("/api/v1", authRouter)

const app = express();

app.use((req, res, next) => {
    if (token === "valid") {
        next();
    } else {
        res.send({ message: "invalid token" })
    }
})


router.use("/api/v1", commentRouter)

router.use("/api/v1", feedRouter)

router.use("/api/v1", postRouter)










