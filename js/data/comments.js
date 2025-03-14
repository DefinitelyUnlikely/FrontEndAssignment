import { fetchCommentsByPost, fetchSingleComment, fetchAllComments } from "../API/comments.js";
import { getAllLocalComments, getLocalCommentsByPost, saveLocalCommentData } from "../services/comments.js";



export async function getAllComments(alwaysUpdate = false) {
    if (alwaysUpdate) {
        return await fetchAllComments();
    }

    let comments = getAllLocalComments();

    if (!comments) {
        comments = await fetchAllComments();
        saveLocalCommentData(comments);
    }

    return comments;


}
/**
 * get all comments on a specific post, by post id, available to the API/localStorage.
 * @param {number} postId - id of post to et comments for.
 * @param {boolean} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 */
export async function getCommentsByPost(postId, alwaysUpdate = false) {
    if (alwaysUpdate) {
        return await fetchCommentsByPost(postId);
    }

    let comments = getLocalCommentsByPost(postId);

    if (!comments) {
        comments = await fetchCommentsByPost(postId);
        saveLocalCommentData(comments, postId);
    }

    return comments;
}

/**
 * get a single comment, by its id.
 * @param {number} commentId - id of the post to get. 
 * @param {boolean} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 * @returns 
 */
export async function getSingleComment(commentId, alwaysUpdate = false) {
    if (alwaysUpdate) {
        return await fetchSingleComment(commentId);
    }

    return await fetchSingleComment(commentId);
}