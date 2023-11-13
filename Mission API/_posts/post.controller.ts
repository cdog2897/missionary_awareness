import { Request, RequestHandler, Response } from 'express';
import * as PostDao from '../_posts/post.dao';
import { OkPacket } from 'mysql';

export const readAlbums: RequestHandler = async (req: Request, res: Response) => {
    try {

        let posts = await PostDao.readPosts();
        res.status(200).json(
            posts
        );
    
    } catch (error) {
        console.error('[posts.controller][readPosts][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching posts'
        });
    }
};

export const postPost: RequestHandler = async (req: Request, res: Response) => {

    try {
        console.log("GETTING POSTS ");
        console.log('req.body', req.body);
        const okPacket: OkPacket = await PostDao.createPost(req.body);
        console.log('post', okPacket);
        res.status(200).json(okPacket);

    }
    catch(error) {
        console.error('[posts.controller][createPost][Error}', error);
        res.status(500).json({
            message: 'There was an error creating a post'
        });
    }

};

export const setPost: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await PostDao.updatePost(req.body);

        console.log('req.body', req.body);
        console.log('post', okPacket);
        res.status(200).json(okPacket);
    }
    catch(error) {
        console.error('[posts.controller][updatePost][Error]', error);
        res.status(500).json({
            message: 'There was an error updating a post'
        });
    }
};

export const deletePost: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('req.body', req.body);

        let postId = parseInt(req.params.postId as string);
        console.log('postId', postId);

        if (!Number.isNaN(postId)) {
            const response = await PostDao.deletePost(postId);
            res.status(200).json(response);

        } else {
            throw new Error("Integer expected for post ID ");
        }
    }
    catch(error) {
        console.error('[posts.controller][deletePost][Error]', error);
        res.status(500).json({
            message: 'There was an error deleting a post'
        });
    }
};

export const getPostById: RequestHandler = async (req: Request, res: Response) => {
    try {
        let postId = parseInt(req.params.postId as string);
        if(!Number.isNaN(postId)) {
            const response = await PostDao.getPostById(postId);
            res.status(200).json(response);
        }
        else{
            throw new Error("Integer expected for post ID")
        }
    }
    catch(error) {
        console.error('[posts.controller][getPostById][Error]', error);
        res.status(500).json({
            message: 'There was an error getting post'
        });
    }
};

