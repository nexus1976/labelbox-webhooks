import express, { Request, Response } from 'express';
import { OnSuccessModel } from './onsuccess.model';

export const OnSuccessRouter = express.Router();

OnSuccessRouter.post('/', (req: Request, res: Response) => {
    const model: OnSuccessModel = req.body;
    if (!model) {
        console.log('OnSuccessRouter: bad model given');
        res.status(400).send('Bad model');
        return;
    }

    console.log(`OnSuccessRouter Event Received: ${JSON.stringify(model)}`,);
    res.sendStatus(200);
});