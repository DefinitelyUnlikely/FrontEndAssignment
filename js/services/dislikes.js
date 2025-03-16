import { getSinglePost } from "../data/posts.js";
import { getUserPostLike } from "./likes.js";
import { getCurrentlySelectedUser } from "../constants.js";
import { saveLocalPostData } from "./posts.js";

export async function changePostDislikes(postId) {
    let user = getCurrentlySelectedUser();
    let post = await getSinglePost(postId);

    if (!user) {
        console.log("Please log in");
        return;
    }

    let like = getUserPostLike(postId, user.id);
    let dislike = getUserPostDislike(postId, user.id);

    if (!dislike && !like) {
        post.reactions.dislikes += 1;
        saveLocalPostData(post, true);
        localStorage.setItem(`dislikes/posts/${postId}/${user.id}`, "true")
        return;
    }

    if (!dislike && like) {
        post.reactions.likes -= 1;
        post.reactions.dislikes += 1;
        saveLocalPostData(post, true);
        localStorage.setItem(`dislikes/posts/${postId}/${user.id}`, "true")
        localStorage.removeItem(`likes/posts/${postId}/${user.id}`)
        return;
    }

    post.reactions.dislikes -= 1;
    saveLocalPostData(post, true);
    localStorage.removeItem(`dislikes/posts/${postId}/${user.id}`)
}

export function getUserPostDislike(postId, userId) {
    return localStorage.getItem(`dislikes/posts/${postId}/${userId}`)
}
