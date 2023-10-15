import { Application } from 'express';
import userRoute from '../components/user/user.routes';
import { createFollower, createPost, createUser, getAllFollowers, getAllUser, getPostByUserId, getUser } from '../components/user/user.DAL';

export class ApplicationConfig {
    public static registerRoute(app: Application) {
        app.use('/user', userRoute);
        app.post('/insertOneUser', async (req, res) => {
            console.log('***********', req.body);
            // get request input
            const { arg1 } = req.body.input;
            delete arg1._id;
            const user = await createUser(arg1);

        
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
            const { input } = req.body.input;
            console.log('**********');
            // run some business logic
            const posts = await getPostByUserId();
        
            
            const mappedPosts = posts.map(post => ({
                user_id: post.user_id,
                text: post.text,
                created_at: post.created_at,
                image_url: post.image_url,
              }));
            console.log(mappedPosts);
            // console.log('*******', ans);
            return res.json(
                mappedPosts
            );
        });

    


        app.post('/getUserById', async (req, res) => {

            // get request input
            
          console.log('^^^^^^^^^^^^^^^^^^^^^^^');
            // run some business logic
            const { arg1 } = req.body.input;
            delete arg1._id;
            console.log('____',arg1);
            const user = await getUser(arg1);
          console.log(user);
          
            // success
            return res.json(user)
          
          });
          app.post('/postFollower', async (req, res) => {

            // get request input
            const { arg1 } = req.body.input;
          
            // run some business logic
            console.log('^^^^^^^^^^^^^^^^^^^^^^^');
            // run some business logic
          
            delete arg1._id;
            console.log('____',arg1);
            const user = await createFollower(arg1);
            return res.json({
              user_id: "<value>"
            })
          
          });

          app.post('/getAllUsers', async (req, res) => {
console.log('^^^^^^^^^');
            const user = await getAllUser();
          console.log('sfsdfdfdgdfgdfgfg',user);
            // success
            return res.json(user)
          
          });

          app.post('/getAllFollowers', async (req, res) => {
            console.log('^^^^^^^^^');
            const { arg1 } = req.body.input;
                        const user = await getAllFollowers({'user_id':arg1.user_id});
                      console.log('sfsdfdfdgdfgdfgfg',user);
                        // success
                        return res.json(user)
                      
                      });
    }
}
