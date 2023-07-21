import express from 'express';
import path from 'path';
import { authRouter } from "./Api v1/routes/auth.mjs";
import { commentRouter } from "./Api v1/routes/comment.mjs";
import { feedRouter } from "./Api v1/routes/feed.mjs";
import { postRouter } from "./Api v1/routes/post.mjs";

import { authRouter } from "./Api v2/routes/auth.mjs";
import { commentRouter } from "./Api v2/routes/comment.mjs";
import { feedRouter } from "./Api v2/routes/feed.mjs";
import { postRouter } from "./Api v2/routes/post.mjs";

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  console.log('Hello World!', new Date());
  res.send('Hello World!' + new Date());
})
app.get('/profile', (req, res) => {
  console.log('this is profile', new Date());
  res.send('this is profile!' + new Date());
})

app.use("/api/v1", authRouter)

app.use("/api/v1", commentRouter)

app.use("/api/v1", feedRouter)

app.use("/api/v1", postRouter)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})