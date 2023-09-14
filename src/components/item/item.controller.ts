import { NextFunction, Request, Response } from 'express';
import HttpExceptions, { ERROR_CONST } from '../../utils/error-utils';
import { successCommonCode, SuccessResponse } from '../../utils/success-utils';
import {
    createItem,
    getItems,
    itemFindByIdAndUpdate,
    itemWithPagination
} from './item.DAL';
import { ITEM_ERROR_CODES } from './item.errors';
import { IItemDocument } from './item.model';

const MODULE_NAME_FOR_LOG = 'item.controller';

class ItemController {
    /**
     * creating new Item record in database
     */
    public async createItem(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const itemData = req.body;
            const newItemData = await createItem(itemData);
            const response = SuccessResponse.apiSuccess({
                code: successCommonCode.CREATED_SUCCESSFULLY,
                data: newItemData,
                description: 'Item record created successfully',
            });
            res.status(response.statusCode).json(response);
        } catch (err) {
            next(err);
        }
    }

    /**
     * update Item  doc by id
     */
    public async updateItem(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { itemId } = req.params;

            const { type } = req.body;

            const itemUpdateObj: Partial<IItemDocument> = {
                [type]: req.body[type],
            };

            /**
             * set new data to selected item doc
             */

            const updatedItemData = await itemFindByIdAndUpdate(itemId, {
                $set: itemUpdateObj,
            });

            if (!updatedItemData) {
                const exception = new HttpExceptions({
                    errorType: ERROR_CONST.BAD_REQUEST,
                    exceptionCode: ITEM_ERROR_CODES.ITEM_NOT_FOUND,
                    description: 'ITEM_NOT_FOUND_FOR_UPDATE',
                    moduleName: MODULE_NAME_FOR_LOG,
                });
                next(exception);
                return;
            }

            const response = SuccessResponse.apiSuccess({
                code: successCommonCode.UPDATED_SUCCESSFULLY,
                data: updatedItemData,
                description: 'Item record updated successfully',
            });
            res.status(response.statusCode).json(response);
        } catch (err) {
            next(err);
        }
    }

    /**
     * delete item doc from database
     */
    public async deleteItem(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { itemId } = req.params;

            const deletedItem = await itemFindByIdAndUpdate(itemId, { isArchived: true });

            if (!deletedItem) {
                const exception = new HttpExceptions({
                    errorType: ERROR_CONST.BAD_REQUEST,
                    exceptionCode: ITEM_ERROR_CODES.ITEM_NOT_FOUND,
                    description: 'ITEM_NOT_FOUND_FOR_DELETE',
                    moduleName: MODULE_NAME_FOR_LOG,
                });
                next(exception);
                return;
            }

            const response = SuccessResponse.apiSuccess({
                code: successCommonCode.DELETED_SUCCESSFULLY,
                description: 'item record deleted successfully',
            });
            res.status(response.statusCode).json(response);
        } catch (err) {
            next(err);
        }
    }

    /**
     * controls getting item data from collection with pagination
     */
    public async getAllItem(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            /**
             * search query if admin wants or whole collection will be shown
             */
            const { type } = req.params;
            const searchParam = req.query.searchParam as string;
            const page = parseInt(req.query.page as string, 10) || 1;
            const limit = parseInt(req.query.limit as string, 10) || 10;
            const sort = { createdAt: 'desc' };
            const query: Record<string, any> = {} ;
            const options = {
                page,
                limit,
                sort,
            };

            if (type && type !== 'all') {
                query.type = type;
                if (searchParam) {
                    query[`${type}.name`] = { $regex: searchParam, $options: 'i' };
                }
            }
            
            const itemList = await itemWithPagination(query, options);
            const response = SuccessResponse.apiSuccess({
                code: successCommonCode.FETCHED_SUCCESSFULLY,
                data: itemList,
                description: 'Item record fetched successfully',
            });
            res.status(response.statusCode).json(response);
        } catch (err) {
            next(err);
        }
    }

    /**
     * controls getting all item without pagination
     */
    public async getItems(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const items = await getItems({ isArchived: false });
            const response = SuccessResponse.apiSuccess({
                code: successCommonCode.FETCHED_SUCCESSFULLY,
                data: items,
                description: 'Items record fetched successfully',
            });
            res.status(response.statusCode).json(response);
        } catch (err) {
            next(err);
        }
    }
}

export const itemController = new ItemController();
export default itemController;
