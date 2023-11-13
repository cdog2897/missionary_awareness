import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Post } from "./post.model";
import { postQueries } from "./post.queries";


export const readPosts = async () => {
    return execute<Post[]>(postQueries.readPosts, []);
};

export const getPostById = async (postId: number) => {
    return execute<Post[]>(postQueries.getPostById, [postId]);
};

export const createPost = async (post: Post) => {
    return execute<OkPacket>(postQueries.createPost,
        [post.userId, post.username, post.caption, post.date, post.img]);
};

export const updatePost = async (post: Post) => {
    return execute<OkPacket>(postQueries.updatePost,
        [post.userId, post.username, post.caption, post.date, post.img, post.postId]);
};

export const deletePost = async (postId: number) => {
    return execute<OkPacket>(postQueries.deletePost,
        [postId]);
};