import { config } from 'dotenv';
import fs from 'fs';

config();
/**
 * Config object of environment variables
 */

// JWT PRIVATE and PUBLIC key for Auth token
const privateKeyToSignJWT = fs.readFileSync('./auth_keys/jwtPrivate.key', 'utf8'); // readFileSync will read path from project's root (process.cwd())
const publicKeyToVerifyJWT = fs.readFileSync('./auth_keys/jwtPublic.key', 'utf8'); // utf8 option will read file as string and not as buffer

export const Config = {
    SERVER_ENV: process.env.SERVER_ENV || 'local',
    server: {
        PORT: parseInt(process.env.PORT, 10) || 3000,
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
        mongoDBConnectionUrl: process.env.DB_URL,
    },
    jwtAuthentication: {
        privateKeyToSignJWT, // use this to sign all jwt tokens
        publicKeyToVerifyJWT, // use this to verify all signed jwt tokens
        signOptions: {
            algorithm: 'RS256',
        },
    },
    razorpay: {
        keyId: process.env.RAZORPAY_KEY,
        keySecret: process.env.RAZORPAY_KEY_SECRET,
        url: 'https://api.razorpay.com/v1',
        webhook: 'https://ikit.chatomate.in/saas/workflow/bot/635a79107a7fd9e3a5c43652',
        webhookToken: process.env.WEBHOOK_UPDATE_TOKEN,
        checkpointToken: process.env.CHECKPOINT_UPDATE_TOKEN,
    },
    checkPointUpdateWebhook: process.env.CHECKPOINT_UPDATE_WEBHOOK,
};

export default Config;
