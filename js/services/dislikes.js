import { getSinglePost } from "../data/posts.js";

export async function changePostDislikes(postId) {
    let post = await getSinglePost(postId);
}

export function getUserPostDislike(postId, userId) {
    return localStorage.getItem(`dislikes/posts/${postId}/${userId}`)
}
