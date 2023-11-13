import { Router } from 'express';
import * as PostsController from './post.controller';

const router = Router();

router
    .route('/posts')
    .get(PostsController.readAlbums);

router
    .route('/posts')
    .post(PostsController.postPost);

router
    .route('/posts')
    .put(PostsController.setPost);


router
    .route('/posts/:postId')
    .delete(PostsController.deletePost);

router
    .route('/posts/:postId')
    .get(PostsController.getPostById);

export default router;