import { Router } from 'express';
import { ReqProperty, validator } from '../../middleware/validator.middleware';
import itemController from './item.controller';
import { AddItemDTO, ItemReqParamDTO } from './item.dto';

export const itemRoute = Router({ strict: false });

/**
 * create new item doc
 */
itemRoute.post(`/`, validator(ReqProperty.BODY, AddItemDTO), itemController.createItem);

/**
 * update item data
 */
itemRoute.put(`/:itemId`, validator(ReqProperty.PARAMS, ItemReqParamDTO), itemController.updateItem);

/**
 * delete item data
 */
itemRoute.delete(`/:itemId`, validator(ReqProperty.PARAMS, ItemReqParamDTO), itemController.deleteItem);

/**
 * get all item list
 */
itemRoute.get('/getList/:type', itemController.getAllItem);

itemRoute.get('/', itemController.getItems);

export default itemRoute;
