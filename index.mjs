import express from 'express';
import path from 'path';

import ApiV1Router from './ApiV1/api_v1.mjs'
import ApiV2Router from './ApiV2/api_v2.mjs'

const app = express()

app.use(express.json()); 

app.use (ApiV1Router)
app.use (ApiV2Router)


app.get('/', (req, res) => {
  console.log('Hello World!', new Date());
   res.status(200).send('Hello World!' + new Date());
})
app.get('/profile', (req, res) => {
  console.log('this is profile', new Date());
   res.status(200).send('this is profile!' + new Date());
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
