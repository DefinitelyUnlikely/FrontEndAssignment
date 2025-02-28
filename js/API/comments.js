/**
 * get all comments on a specific post, by post id, available to the API/localStorage.
 * @param {number} postId - id of post to et comments for.
 * @param {boolean} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 */
export async function getCommentsByPost(postId, alwaysUpdate = false) {
    return (await fetch('https://dummyjson.com/comments/post/' + postId)).json();
}

/**
 * get a single comment, by its id.
 * @param {number} commentId - id of the post to get. 
 * @param {boolean} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 * @returns 
 */
export async function getSingleComment(commentId, alwaysUpdate = false) {
    return (await fetch('https://dummyjson.com/comments/' + commentId)).json()
}