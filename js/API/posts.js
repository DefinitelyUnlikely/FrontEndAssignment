/**
 * get all posts available to the API/localStorage.
 * @param {*} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 * @returns a json containing all posts and information pertaining to the (original) API call.
 */
export async function getAllPosts(alwaysUpdate = false) {
    return (await fetch('https://dummyjson.com/posts?limit=20')).json();
}

/**
 * Get a single post using its id.
 * @param {*} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 * @returns a json containing information for a single post.
 */
export async function getSinglePost(postId, alwaysUpdate = false) {
    return (await fetch('https://dummyjson.com/posts/' + postId)).json();
}

/**
 * Get a list of all available tags to the API.
 * @param {*} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 * @returns A list of tags.
 */
export async function getAllPostTagsList(alwaysUpdate = false) {
    return (await fetch('https://dummyjson.com/posts/tag-list')).json();
}