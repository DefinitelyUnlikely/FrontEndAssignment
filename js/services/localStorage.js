// File for all localStorage related data.

export function getLocalPostData() {
    try {
        const posts = localStorage.getItem("posts");
        if (posts == null) {
            return [];
        }

        return JSON.parse(posts);

    } catch (e) {
        throw new Error("Could not get data");
    }
}

export function saveLocalPostData(posts, single = false) {
    if (single) {
        return;
    }

    try {
        localStorage.setItem("posts", JSON.stringify(posts));
    } catch (e) {
        throw new Error("Could not save post data");
    }
}

export function getLocalCommentData() {
    return [];

}

export function saveLocalCommentData(comments, single = false) {
    if (single) {
        return;
    }

    try {
        localStorage.setItem("comments", JSON.stringify(comments));
    } catch (e) {
        throw new Error("Could not save comment data");
    }
}

export function getLocalUserData() {
    return [];
}

export function saveLocalUserData(users, single = false) {

    if (single) {
        return;
    }

    try {
        localStorage.setItem("users", JSON.stringify(users));
    } catch (e) {
        throw new Error("Could not save user data");
    }
}
