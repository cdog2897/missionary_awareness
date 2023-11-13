
export const postQueries = {

readPosts: 'SELECT * FROM missions.posts',

getPostById: 'SELECT * FROM missions.posts WHERE postId = ?',

createPost: 'INSERT INTO missions.posts (postId, userId, username, caption, date, img) VALUES (NULL, ?, ?, ?, ?, ?)',

updatePost:
		`UPDATE missions.posts SET userId=?, username=?, caption=?, date=?, img=? WHERE postId = ?`,

deletePost:
        'DELETE FROM missions.posts where postId = ?',

}