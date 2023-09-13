import { Types } from 'mongoose';
import HttpException, { ERROR_CONST } from '../../utils/error-utils';
import { ITEM_ERROR_CODES } from './item.errors';
import { IItem, IItemDocument, Item } from './item.model';

const MODULE_NAME_FOR_LOG = 'item.DAL';

/**
 * Create item in db
 */
export async function createItem(itemData): Promise<IItem> {
    try {
        return await Item.create(itemData);
    } catch (err) {
        throw new HttpException({
            errorType: ERROR_CONST.UNHANDLED_ERROR,
            exceptionCode: 'CREATE_ITEM_UNHANDLED_IN_DB',
            description: ITEM_ERROR_CODES.CREATE_ITEM_UNHANDLED_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG,
        });
    }
}

/**
 * Find item by id and update data in db
 */
export const itemFindByIdAndUpdate = async (
    itemId: string | Types.ObjectId,
    updateObject: Record<string, any>,
    options: Record<string, any> = { new: true },
): Promise<IItem | null> => {
    try {
        return await Item.findByIdAndUpdate(itemId, updateObject, options);
    } catch (err) {
        throw new HttpException({
            errorType: ERROR_CONST.UNHANDLED_ERROR,
            exceptionCode: 'UPDATE_ITEM_UNHANDLED_IN_DB',
            description: ITEM_ERROR_CODES.UPDATE_ITEM_UNHANDLED_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG,
        });
    }
};

/**
 * Delete item from db
 */
export const itemFindByIdAndDelete = async (itemId: string | Types.ObjectId): Promise<IItem | null> => {
    try {
        return await Item.findByIdAndDelete(new Types.ObjectId(itemId));
    } catch (err) {
        throw new HttpException({
            errorType: ERROR_CONST.UNHANDLED_ERROR,
            exceptionCode: 'DELETE_ITEM_UNHANDLED_IN_DB',
            description: ITEM_ERROR_CODES.DELETE_ITEM_UNHANDLED_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG,
        });
    }
};

/**
 * Find item list with pagination
 */
export const itemWithPagination = async (query: any, options: any) => {
    try {
        return await Item.paginate(query, options);
    } catch (err) {
        throw new HttpException({
            errorType: ERROR_CONST.DATABASE_ERROR,
            exceptionCode: 'GET_ITEM_UNHANDLED_IN_DB',
            description: ITEM_ERROR_CODES.GET_ITEM_UNHANDLED_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG,
        });
    }
};

/**
 * Find item list without pagination
 */
export const getItems = async (query: Record<string, any>, options?: Record<string, any>) => {
    try {
        return await Item.find(query, options);
    } catch (err) {
        throw new HttpException({
            errorType: ERROR_CONST.DATABASE_ERROR,
            exceptionCode: 'GET_ITEM_UNHANDLED_IN_DB',
            description: ITEM_ERROR_CODES.GET_ITEM_UNHANDLED_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG,
        });
    }
};

export const getItemById = async (id: string, options?: Record<string, any>) => {
    try {
        return await Item.findById(id, options);
    } catch (err) {
        throw new HttpException({
            errorType: ERROR_CONST.DATABASE_ERROR,
            exceptionCode: 'GET_ITEM_UNHANDLED_IN_DB',
            description: ITEM_ERROR_CODES.GET_ITEM_UNHANDLED_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG,
        });
    }
};
