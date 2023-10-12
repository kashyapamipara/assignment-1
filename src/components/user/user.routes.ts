import { Router } from 'express';
import userController from './user.controller';
import { AddUserBodyDTO, UserLoginBodyDTO } from './user.dto';

export const userRoute = Router({ strict: false });

/**
 * to sign up new admin
 */
userRoute.post(`/`, userController.signupUser);

/**
 * to login admin
 */


/**
 * to logout admin
 */
userRoute.post(`/logout`, userController.logoutAdmin);

export default userRoute;
