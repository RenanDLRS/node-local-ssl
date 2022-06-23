import { Router } from 'express';
import * as placeHolderController from '../controllers/placeHolderController';
import { placeHolderFunciton } from '../middlewares/placeHolderMiddleware';

const routerPlaceHolder = Router();

routerPlaceHolder.post('/place-holder-route', placeHolderFunciton, placeHolderController.placeHolderFunciton);

export default routerPlaceHolder;
