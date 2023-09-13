import { Application } from 'express';
import itemRoute from '../components/item/item.routes';
import userRoute from '../components/user/user.routes';
import { authenticate } from '../middleware/authentication.middleware';

export class ApplicationConfig {
    public static registerRoute(app: Application) {
        app.use('/user', userRoute);
        app.use('/items', authenticate.middleWare, itemRoute);
        
    }
}
