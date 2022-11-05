import express, { Request, Response } from 'express';
import { OnStartModel } from './onstart.model';

export const OnStartRouter = express.Router();

OnStartRouter.post('/', (req: Request, res: Response) => {
    const model: OnStartModel = req.body;
    if (!model) {
        console.log('OnStartRouter: bad model given');
        res.status(400).send('Bad model');
        return;
    }

    console.log(`OnStart Event Received: ${JSON.stringify(model)}`,);
    res.sendStatus(200);
});