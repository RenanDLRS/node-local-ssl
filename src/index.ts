import dotenv from "dotenv";
dotenv.config();
import express,{ Request,Response } from 'express';
import placeHolderRoutes from './routes/placeHolderRoute';
import https from 'https';
import fs from 'fs';
import { join } from 'path';

const port = process.env.SERVER_PORT;
const app = express();

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.get(`/`, (req: Request, res: Response) => {
    res.json({message: `Server running. Pong.`});
});

app.use(placeHolderRoutes);

//Add certificate files to cert
https.createServer({
    key: fs.readFileSync(join(__dirname, '../cert/server.key')),
    cert: fs.readFileSync(join(__dirname, '../cert/server.crt')),
  },
  app
  ).listen(port, () => console.log(`App running on ${port}`));
