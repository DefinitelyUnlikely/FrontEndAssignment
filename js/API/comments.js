/**
 * get all comments on a specific post, by post id, available to the API/localStorage.
 * @param {number} postId - id of post to et comments for.
 */
export async function fetchCommentsByPost(postId) {
    return (await fetch('https://dummyjson.com/comments/post/' + postId)).json();
}

/**
 * get a single comment, by its id.
 * @param {number} commentId - id of the post to get. 
 * @returns 
 */
export async function fetchSingleComment(commentId) {
    return (await fetch('https://dummyjson.com/comments/' + commentId)).json()
}