import { fetchCommentsByPost, fetchSingleComment } from "../API/comments.js";
import { getLocalCommentsByPost, saveLocalCommentData } from "../services/localStorage.js";

/**
 * get all comments on a specific post, by post id, available to the API/localStorage.
 * @param {number} postId - id of post to et comments for.
 * @param {boolean} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 */
export async function getCommentsByPost(postId, alwaysUpdate = false) {
    if (alwaysUpdate) {
        return await fetchCommentsByPost(postId);
    }

    let comments = getLocalCommentsByPost();

    if (comments = []) {
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