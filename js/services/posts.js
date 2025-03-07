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

export function saveLocalPostData(posts, replace = false) {
    try {
        if (replace) {
            localStorage.setItem("posts", JSON.stringify(posts));
            return;
        }
        let localPosts = getLocalPostData();
        localPosts.posts.unshift(posts);
        localStorage.setItem("posts", JSON.stringify(localPosts));

    } catch (e) {
        throw new Error("Could not save post data");
    }
}
