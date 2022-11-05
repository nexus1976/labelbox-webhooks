import express, { Request, Response } from 'express';
import { OnFailureModel } from './onfailure.model';

export const OnFailureRouter = express.Router();

OnFailureRouter.post('/', (req: Request, res: Response) => {
    const model: OnFailureModel = req.body;
    if (!model) {
        console.log('OnFailureRouter: bad model given');
        res.status(400).send('Bad model');
        return;
    }

    console.log(`OnFailureRouter Event Received: ${JSON.stringify(model)}`,);
    res.sendStatus(200);
});