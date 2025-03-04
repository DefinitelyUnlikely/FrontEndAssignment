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
        console.log("inside savelocalpost");
        console.log(posts);
        if (single) {
            let localPosts = getLocalPostData();
            localPosts.posts.unshift(posts);
            localStorage.setItem("posts", JSON.stringify(localPosts));
            return;
        }
        localStorage.setItem("posts", JSON.stringify(posts));
    } catch (e) {
        throw new Error("Could not save post data");
    }
}

export function getLocalCommentsByPost(postId) {
    try {
        const comments = localStorage.getItem("comments/" + postId);

        if (comments == null) {
            return [];
        }

        return JSON.parse(comments);

    } catch (e) {
        throw new Error("Could not get data");
    }

}

export function saveLocalCommentData(comments, postId, single = false) {
    try {
        if (single) {
            let localComments = getLocalCommentsData();
            localComments.unshift(comments);
            localStorage.setItem("comments" + postId, JSON.stringify(localComments));
            return;
        }

        localStorage.setItem("comments", JSON.stringify(comments));
    } catch (e) {
        throw new Error("Could not save comment data");
    }
}

export function getLocalUserData() {
    try {
        const users = localStorage.getItem("users");

        if (users == null) {
            return [];
        }

        return JSON.parse(users);

    } catch (e) {
        throw new Error("Could not get data");
    }
}

export function saveLocalUserData(users, single = false) {
    try {
        if (single) {
            let localUsers = getLocalUserData();
            localUsers.unshift(users);
            localStorage.setItem("users", JSON.stringify(localUsers));
            return;
        }

        localStorage.setItem("users", JSON.stringify(users));
    } catch (e) {
        throw new Error("Could not save user data");
    }
}


export function getLocalPostTagData() { }

export function saveLocalPostTagData() { }