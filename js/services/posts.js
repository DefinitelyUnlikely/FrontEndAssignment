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

            // Check if the post id already exists in the array, if so
            // we need to exchange them rather than add the post to the array. 
            for (let post of localPosts) {
                if (posts.id == post.id) {
                    post = posts;
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
