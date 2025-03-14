export function getLocalPostData() {
    try {
        const posts = localStorage.getItem("posts");

        if (posts == null) {
            return null;
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
