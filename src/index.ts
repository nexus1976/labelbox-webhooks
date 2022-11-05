/** Required External Modules */

import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { OnStartRouter } from './onstart.router';
import { OnSuccessRouter } from './onsuccess.router';
import { OnFailureRouter } from './onfailure.router';

dotenv.config();

/** App Variables */
if (!process.env.PORT) {
	process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

/** App Configuration */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/onstart', OnStartRouter);
app.use('/onsuccess', OnSuccessRouter);
app.use('/onfailure', OnFailureRouter);

/** Server Activation */
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}\nDid you remember to ensure your PostgreSQL database has been configured and started?`);
});
