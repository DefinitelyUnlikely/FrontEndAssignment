import { getCurrentlySelectedUser } from "../constants.js";
import { getCommentsByPost } from "../data/comments.js";
import { getSinglePost } from "../data/posts.js";
import { getUserPostDislike } from "./dislikes.js";
import { saveLocalPostData } from "./posts.js";



export async function changePostLikes(postId) {
    let user = getCurrentlySelectedUser();
    let post = await getSinglePost(postId);

    if (!user) {
        console.log("Please log in");
        return;
    }

    let like = getUserPostLike(postId, user.id);
    let dislike = getUserPostDislike(postId, user.id);

    if (!like && !dislike) {
        post.reactions.likes += 1;
        saveLocalPostData(post, true);
        localStorage.setItem(`likes/posts/${postId}/${user.id}`, "true")
        return;
    }

    if (!like && dislike) {
        post.reactions.likes += 1;
        post.reactions.dislikes -= 1;
        saveLocalPostData(post, true);
        localStorage.setItem(`likes/posts/${postId}/${user.id}`, "true")
        localStorage.removeItem(`dislikes/posts/${postId}/${user.id}`)
        return;
    }

    post.reactions.likes -= 1;
    saveLocalPostData(post, true);
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