import { Application } from 'express';
import userRoute from '../components/user/user.routes';
import { createPost, createUser, getPostByUserId } from '../components/user/user.DAL';

export class ApplicationConfig {
    public static registerRoute(app: Application) {
        app.use('/user', userRoute);
        app.post('/insertOneUser', async (req, res) => {
            console.log('***********', req.body);
            // get request input
            const { arg1 } = req.body.input;
            delete arg1._id;
            const user = await createUser(arg1);

            // run some business logic

            /*
            // In case of errors:
            return res.status(400).json({
              message: "error happened"
            })
            */

            // success
            return res.json({
                _id: '<value>',
                email: '<value>',
                image_url: '<value>',
                user_id: '<value>',
                user_name: '<value>',
                userName: '<value>',
            });
        });

        app.post('/insertOnePost', async (req, res) => {
            // get request input

            // run some business logic
            console.log('***********', req.body);
            // get request input
            const { arg1 } = req.body.input;
            delete arg1._id;
            const user = await createPost(arg1);

            /*
            // In case of errors:
            return res.status(400).json({
              message: "error happened"
            })
            */

            // success
            return res.json({
                user_id: '<value>',
                text: '<value>',
                created_at: '<value>',
                image_url: '<value>',
            });
        });
        app.post('/getPostsByUser', async (req, res) => {
            // get request input
            const { arg1 } = req.body.input;
            console.log('**********');
            // run some business logic
            const posts = await getPostByUserId(arg1);
            /*
            // In case of errors:
            return res.status(400).json({
              message: "error happened"
            })
            */

            // success
            var ans = [];
            for (let i = 0; i < posts.length; i++) {
                ans.push({
                    user_id: posts[i].user_id,
                    text: posts[i].text,
                    created_at: posts[i].created_at,
                    image_url: posts[i].image_url,
                });
            }
            console.log(posts);
            console.log('*******', ans);
            return res.json({
                "user_id": posts[0].user_id,
                "text": posts[0].text,
                "created_at": posts[0].created_at,
                "image_url": posts[0].image_url,
            });
        });
    }
}
