// File for all localStorage related data.

export function getPostData() {
    return [];
}

export function savePostData(postArray) {
    try {
        localStorage.setItem("posts", JSON.stringify(postArray));
    } catch (e) {
        throw new Error("Could not save post data");
    }
}

export function getCommentData() {
    return [];

}

export function saveCommentData(commentArray) {
    try {
        localStorage.setItem("comments", JSON.stringify(commentArray));
    } catch (e) {
        throw new Error("Could not save comment data");
    }
}

export function getUserData() {
    return [];
}

export function saveUserData(userArray) {
    try {
        localStorage.setItem("users", JSON.stringify(userArray));
    } catch (e) {
        throw new Error("Could not save user data");
    }
}
