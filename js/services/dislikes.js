import { getSinglePost } from "../data/posts.js";

export async function changePostDislikes(postId) {
    let user = getCurrentlySelectedUser();
    let post = getSinglePost(postId);

    if (!user) {
        console.log("Please log in");
        return;
    }

    let like = getUserPostLike(postId, user.id);
    let dislike = getUserPostDislike(postId, user.id);

    if (!dislike && !like) {
        post.reactions.dislikes += 1;
        localStorage.setItem(`dislikes/posts/${postId}/${user.id}`, "true")
        return;
    }

    if (!dislike && like) {
        // Need to save updated reactions to localStorage.
        post.reactions.likes -= 1;
        post.reactions.dislikes += 1;
        localStorage.removeItem(`likes/posts/${postId}/${user.id}`)
        return;
    }

    post.reactions.dislikes -= 1;
    localStorage.removeItem(`dislikes/posts/${postId}/${user.id}`)
}

export function getUserPostDislike(postId, userId) {
    return localStorage.getItem(`dislikes/posts/${postId}/${userId}`)
}
