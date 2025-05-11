import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express();

app.listen(process.env.HTTP_PORT, ()=> {
    console.log("app is listening on port: ", process.env.HTTP_PORT)
});

