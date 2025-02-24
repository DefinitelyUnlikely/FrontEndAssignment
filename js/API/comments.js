/**
 * get all comments on a specific post, by post id, available to the API/localStorage.
 * @param {*} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 */
export async function getCommentsByPost(postId, alwaysUpdate = false) {
    return (await fetch('https://dummyjson.com/comments/post/' + postId)).json();
}

/**
 * get a single comment by its id.
 * @param {*} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 */
export async function getSingleComment(commentId, alwaysUpdate = false) {

}