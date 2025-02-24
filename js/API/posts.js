/**
 * get all posts available to the API/localStorage.
 * @param {*} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 */
export async function getAllPosts(alwaysUpdate = false) {
    return (await fetch('https://dummyjson.com/posts?limit=20')).json();
}

/**
 * Get a single post using its id.
 * @param {*} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 */
export async function getSinglePost(postId, alwaysUpdate = false) {
    return (await fetch('https://dummyjson.com/posts/' + postId)).json();
}