import { getCurrentlySelectedUser } from "../constants.js";
import { getCommentsByPost } from "../data/comments.js";
import { getSinglePost } from "../data/posts.js";
import { getUserPostDislike } from "./dislikes.js";



export async function changePostLikes(postId) {
    let user = getCurrentlySelectedUser();
    let post = getSinglePost(postId);

    if (!user) {
        console.log("Please log in");
        return;
    }

    let like = getUserPostLike(postId, user.id);
    let dislike = getUserPostDislike(postId, user.id);

    if (!like && !dislike) {
        // Also need to save this to localStorage
        post.reactions.likes += 1;
        localStorage.setItem(`likes/posts/${postId}/${user.id}`, "true")
        return;
    }

    if (!like && dislike) {
        // Need to save updated reactions to localStorage.
        post.reactions.likes += 1;
        post.reactions.dislikes -= 1;
        localStorage.removeItem(`dislikes/posts/${postId}/${user.id}`)
        return;
    }

    // At this point, they've already liked the post and we undo the like.
    post.reactions.likes -= 1;
    localStorage.removeItem(`likes/posts/${postId}/${user.id}`)

}

export async function changeCommentLikes(postId, commentId) {
    let comments = await getCommentsByPost(postId);

}


export function getUserPostLike(postId, userId) {
    return localStorage.getItem(`likes/posts/${postId}/${userId}`)
}

export function getUserCommentLike(commentId, userId) {
    return localStorage.getItem(`likes/comments/${commentId}/${userId}`)
}