import { NextFunction, Request, Response } from 'express';
import { getLogger } from '../../services/logger';
import HttpException, { ERROR_CONST } from '../../utils/error-utils';
import { successCommonCode, SuccessResponse } from '../../utils/success-utils';
import { createUser } from './user.DAL';
import { USER_ERROR_CODES } from './user.errors';
import User, { IUser, IUserDocument } from './user.model';

const MODULE_NAME_FOR_LOG = 'user.controller';
const log = getLogger(MODULE_NAME_FOR_LOG);

class UserController {
    /** signUp new user its used first time while setup system
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @returns {Promise<void>}
     */
    public async signupUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log('******');
            const userObject = req.body;
            console.log('******', userObject);
            const user = await createUser(userObject);
            log.info('user created successfully');
           const response = SuccessResponse.apiSuccess({
                 code: successCommonCode.CREATED_SUCCESSFULLY,
                data: user,
                description: 'user signup Successfully',
            });
            res.status(response.statusCode).json(response);
        } catch (err) {
            next(err);
        }
    }

    /**
     * Post - /user/login
     * login for panel user
     * @param req
     * @param res
     * @param next
     */
    // public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    //     try {
    //         const { email, password } = <IUserDocument>req.body;

    //         const user = await User.findByCredentials(email, password);

    //         if (!user) {
    //             throw new HttpException({
    //                 errorType: ERROR_CONST.BAD_REQUEST,
    //                 exceptionCode: USER_ERROR_CODES.SIGN_IN_FAIL,
    //                 description: 'SIGN_IN_FAIL',
    //                 moduleName: MODULE_NAME_FOR_LOG,
    //             });
    //         }

    //         /*
    //          * Generate new token on every login  */
    //         const userToken = await user.getAuthToken();
    //         const response = SuccessResponse.apiSuccess({
    //             code: 'USER_LOGIN_SUCCESSFULLY',
    //             data: {
    //                 token: userToken,
    //                 _id: userToken._id,
    //                 name: userToken.name,
    //                 email: userToken.email,
    //             },
    //             description: 'user signup Successfully',
    //         });
    //         res.status(response.statusCode).json(response);
    //     } catch (err) {
    //         next(err);
    //     }
    // }

    /**
     * Post - /user/logout/
     * logout from device & remove token array
     * @param req
     * @param res
     * @param next
     */

    public async logoutAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            /*
             * Token verification  */
            const token = req.header('Authorization');
            const user = req.user as IUser;
            /*
             * Removes token on every logout  */
        

            await req.user.save();
            const response = SuccessResponse.apiSuccess({
                code: 'LOGOUT_SUCCESSFULLY',
                description: 'user signup Successfully',
                statusCode: 201,
            });
            res.status(response.statusCode).json(response);
        } catch (err) {
            next(err);
        }
    }
}

export const userController = new UserController();
export default userController;
