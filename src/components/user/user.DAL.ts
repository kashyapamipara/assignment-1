import { getLogger } from '../../services/logger';
import HttpException, { ERROR_CONST } from '../../utils/error-utils';
import Followers from './follower.model';
import Posts, { IPost, IPostDocument } from './posts.model';
import { USER_ERROR_CODES } from './user.errors';
import User, { IUser, IUserDocument } from './user.model';

const MODULE_NAME_FOR_LOG = 'user.DAL';
const log = getLogger(MODULE_NAME_FOR_LOG);

/** Create new user doc in database
 */
export const createUser = async (userObject: IUserDocument): Promise<IUser | never> => {
    try {
        return await User.create(userObject);
    } catch (err) {
        if (err.code === 11000 && err.errmsg.includes('username')) {
            throw new HttpException({
                errorType: ERROR_CONST.BAD_REQUEST,
                exceptionCode: 'EMAIL_ALREADY_EXIST',
                description: USER_ERROR_CODES.EMAIL_ALREADY_EXIST,
                err,
                moduleName: MODULE_NAME_FOR_LOG
            });
        }
        throw new HttpException({
            errorType: ERROR_CONST.DATABASE_ERROR,
            exceptionCode: 'CREATE_USER_IN_DB',
            description: USER_ERROR_CODES.CREATE_USER_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG
        });
    }
};

export const getUser = async (userObject): Promise<IUser | never> => {
    try {
        return await User.findOne(userObject);
    } catch (err) {
        if (err.code === 11000 && err.errmsg.includes('username')) {
            throw new HttpException({
                errorType: ERROR_CONST.BAD_REQUEST,
                exceptionCode: 'EMAIL_ALREADY_EXIST',
                description: USER_ERROR_CODES.EMAIL_ALREADY_EXIST,
                err,
                moduleName: MODULE_NAME_FOR_LOG
            });
        }
        throw new HttpException({
            errorType: ERROR_CONST.DATABASE_ERROR,
            exceptionCode: 'CREATE_USER_IN_DB',
            description: USER_ERROR_CODES.CREATE_USER_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG
        });
    }
};


export const createPost = async (userObject: IPostDocument): Promise<IPost | never> => {
    try {
        return await Posts.create(userObject);
    } catch (err) {
        if (err.code === 11000 && err.errmsg.includes('username')) {
            throw new HttpException({
                errorType: ERROR_CONST.BAD_REQUEST,
                exceptionCode: 'EMAIL_ALREADY_EXIST',
                description: USER_ERROR_CODES.EMAIL_ALREADY_EXIST,
                err,
                moduleName: MODULE_NAME_FOR_LOG
            });
        }
        throw new HttpException({
            errorType: ERROR_CONST.DATABASE_ERROR,
            exceptionCode: 'CREATE_USER_IN_DB',
            description: USER_ERROR_CODES.CREATE_USER_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG
        });
    }
};
export const createFollower = async (userObject): Promise<IPost | never> => {
    try {
        return await Posts.create(userObject);
    } catch (err) {
        if (err.code === 11000 && err.errmsg.includes('username')) {
            throw new HttpException({
                errorType: ERROR_CONST.BAD_REQUEST,
                exceptionCode: 'EMAIL_ALREADY_EXIST',
                description: USER_ERROR_CODES.EMAIL_ALREADY_EXIST,
                err,
                moduleName: MODULE_NAME_FOR_LOG
            });
        }
        throw new HttpException({
            errorType: ERROR_CONST.DATABASE_ERROR,
            exceptionCode: 'CREATE_USER_IN_DB',
            description: USER_ERROR_CODES.CREATE_USER_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG
        });
    }
};

export const getAllUser = async ()=> {
    try {
        return await User.find();
    } catch (err) {
        if (err.code === 11000 && err.errmsg.includes('username')) {
            throw new HttpException({
                errorType: ERROR_CONST.BAD_REQUEST,
                exceptionCode: 'EMAIL_ALREADY_EXIST',
                description: USER_ERROR_CODES.EMAIL_ALREADY_EXIST,
                err,
                moduleName: MODULE_NAME_FOR_LOG
            });
        }
        throw new HttpException({
            errorType: ERROR_CONST.DATABASE_ERROR,
            exceptionCode: 'CREATE_USER_IN_DB',
            description: USER_ERROR_CODES.CREATE_USER_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG
        });
    }
};
export const getPostByUserId = async () => {
    try {
        return await Posts.find();
    } catch (err) {
        if (err.code === 11000 && err.errmsg.includes('username')) {
            throw new HttpException({
                errorType: ERROR_CONST.BAD_REQUEST,
                exceptionCode: 'EMAIL_ALREADY_EXIST',
                description: USER_ERROR_CODES.EMAIL_ALREADY_EXIST,
                err,
                moduleName: MODULE_NAME_FOR_LOG
            });
        }
        throw new HttpException({
            errorType: ERROR_CONST.DATABASE_ERROR,
            exceptionCode: 'CREATE_USER_IN_DB',
            description: USER_ERROR_CODES.CREATE_USER_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG
        });
    }
};
export const getAllFollowers = async (userObject)=> {
    try {
        return await Followers.find(userObject);
    } catch (err) {
        if (err.code === 11000 && err.errmsg.includes('username')) {
            throw new HttpException({
                errorType: ERROR_CONST.BAD_REQUEST,
                exceptionCode: 'EMAIL_ALREADY_EXIST',
                description: USER_ERROR_CODES.EMAIL_ALREADY_EXIST,
                err,
                moduleName: MODULE_NAME_FOR_LOG
            });
        }
        throw new HttpException({
            errorType: ERROR_CONST.DATABASE_ERROR,
            exceptionCode: 'CREATE_USER_IN_DB',
            description: USER_ERROR_CODES.CREATE_USER_IN_DB,
            err,
            moduleName: MODULE_NAME_FOR_LOG
        });
    }
};
