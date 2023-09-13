export const ITEM_ERROR_CODES = {
    /**
     * DAL ERRORS
     */
    GET_ITEM_UNHANDLED_IN_DB: 'Something went wrong while getting item list.',
    CREATE_ITEM_UNHANDLED_IN_DB: 'Something went wrong while creating a item data in db.',
    UPDATE_ITEM_UNHANDLED_IN_DB: 'Something went wrong while updating item data in db.',
    DELETE_ITEM_UNHANDLED_IN_DB: 'Something went wrong while deleting item from list.',

    /**
     * CONTROLLER ERRORS
     */
    CREATE_ITEM_BAD_REQUEST: 'Some important parameter missing in create request',
    UPDATE_ITEM_BAD_REQUEST: 'Some important parameter missing in update request',
    DELETE_ITEM_BAD_REQUEST: 'Some important parameter missing in delete request',
    GET_ITEM_BAD_REQUEST: 'Some important parameter missing in get request',
    ITEM_NOT_FOUND: 'Item not found',
};
