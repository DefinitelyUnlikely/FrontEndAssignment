/**
 * get all posts available to the API/localStorage. (Current implementation only gets 20 posts, set limit=0 to get all posts)
 * @returns a json containing all posts and information pertaining to the (original) API call.
 */
export async function fetchAllPosts() {
    let response = await fetch('https://dummyjson.com/posts?limit=20');

    if (!response.ok) {
        return []
    }

    return response.json().then(response => response.posts)
}

/**
 * Get a single post using its id.
 * @param {number} postId - id of post to get.
 * @returns a json containing information for a single post.
 */
export async function fetchSinglePost(postId) {
    return (await fetch('https://dummyjson.com/posts/' + postId)).json();

}

/**
 * Get a list of all available tags to the API.
 * @returns A list of tags.
 */
export async function fetchAllPostTagsList() {
    return (await fetch('https://dummyjson.com/posts/tag-list')).json();
}