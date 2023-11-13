
//imports express libraries
import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import postsRouter from './_posts/post.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helemt from 'helmet';


dotenv.config();


//Creates an express app and assigns it to app variable
const app = express();

const port = process.env.PORT;

app.use(cors());

//Parse JSON bodies
app.use(express.json());
//Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


app.use(helemt());

console.log(process.env.MY_SQL_DB_HOST);

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Missions API<h1/>');
});


app.use('/', [postsRouter]);

//This method binds the app with the specified port(3000) to listen for any connections.
app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)

});