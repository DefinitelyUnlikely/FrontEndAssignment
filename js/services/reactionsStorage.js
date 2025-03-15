
/**
 * A function that stores which users have liked a certain post, in localStorage, at likes/post/id of post.
 */
export function storeUserLikesPerPost(userId, postId) {
    let likes = localStorage.getItem("likes/post/" + postId);

    if (!likes) {
        likes = [];
    } else {
        likes = JSON.parse(likes);
    }

    likes.push(userId);
    localStorage.setItem("likes/post/" + postId, JSON.stringify(likes));
}

/**
 * A function that stores which users have disliked a certain post, in localStorage, at dislikes/post/id of post.
 */
export function storeUserDislikesPerPost(userId, postId) {
    let dislikes = localStorage.getItem("dislikes/post" + postId);

    if (!dislikes) {
        dislikes = [];
    } else {
        dislikes = JSON.parse(dislikes);
    }

    dislikes.push(userId);
    localStorage.setItem("dislieks/post/" + postId, JSON.stringify(dislikes));
}

/**
 * A function that stores which users have liked a certain comment, in localStorage, at likes/comment/id of comment.
 */
export function storeUserLikesPerComment(userId, commentId) {
    let likes = localStorage.getItem("likes/comment/" + commentId);

    if (!likes) {
        likes = [];
    } else {
        likes = JSON.parse(likes);
    }

    likes.push(userId);
    localStorage.setItem("likes/comment/" + commentId, JSON.stringify(likes));
}