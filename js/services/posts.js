export function getLocalPostData() {
    try {
        const posts = localStorage.getItem("posts");

        if (!posts) {
            return posts;
        }

        return JSON.parse(posts);

    } catch (e) {
        throw new Error("Could not get data");
    }
}

export function saveLocalPostData(posts, single = false) {
    try {
        if (single) {
            let localPosts = getLocalPostData() ? getLocalPostData() : [];

            for (let i = 0; i < localPosts.length; i++) {
                if (posts.id == localPosts[i].id) {
                    localPosts[i] = posts;
                    localStorage.setItem("posts", JSON.stringify(localPosts));
                    return;
                }
            }

            localPosts.unshift(posts);
            localStorage.setItem("posts", JSON.stringify(localPosts));
            return;
        }
        localStorage.setItem("posts", JSON.stringify(posts));
    } catch (e) {
        throw new Error("Could not save post data");
    }
}
