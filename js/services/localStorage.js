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
    try {
        if (single) {
            let localPosts = getLocalPostData();
            localPosts.unshift(posts);
            localStorage.setItem("posts", JSON.stringify(localPosts));
            return;
        }
        localStorage.setItem("posts", JSON.stringify(posts));
    } catch (e) {
        throw new Error("Could not save post data");
    }
}

export function getLocalCommentData() {
    try {
        const posts = localStorage.getItem("comments");

        if (posts == null) {
            return [];
        }

        return JSON.parse(posts);

    } catch (e) {
        throw new Error("Could not get data");
    }

}

export function saveLocalCommentData(comments, single = false) {
    try {
        if (single) {
            let localComments = getLocalCommentsData();
            localComments.unshift(comments);
            localStorage.setItem("comments", JSON.stringify(localComments));
            return;
        }

        localStorage.setItem("comments", JSON.stringify(comments));
    } catch (e) {
        throw new Error("Could not save comment data");
    }
}

export function getLocalUserData() {
    try {
        const posts = localStorage.getItem("users");

        if (posts == null) {
            return [];
        }

        return JSON.parse(posts);

    } catch (e) {
        throw new Error("Could not get data");
    }
}

export function saveLocalUserData(users, single = false) {
    try {
        if (single) {
            let localUsers = getLocalUsersData();
            localUsers.unshift(users);
            localStorage.setItem("users", JSON.stringify(localUsers));
            return;
        }

        localStorage.setItem("users", JSON.stringify(users));
    } catch (e) {
        throw new Error("Could not save user data");
    }
}
