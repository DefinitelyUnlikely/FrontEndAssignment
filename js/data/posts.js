import { fetchAllPosts, fetchAllPostTagsList, fetchSinglePost } from "../API/posts.js";
import { getLocalPostData, saveLocalPostData } from "../services/localStorage.js";

/**
 * get all posts available to the API/localStorage.
 * @param {boolean} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 * @returns a json containing all posts and information pertaining to the (original) API call.
 */
export async function getAllPosts(alwaysUpdate = false) {
    if (alwaysUpdate) {
        posts = await fetchAllPosts();
        saveLocalPostData(posts);
        return posts;
    }

    let posts = getLocalPostData();

    if (posts.length == 0) {
        posts = await fetchAllPosts();
        saveLocalPostData(posts);
    }


    return posts;
}

/**
 * Get a single post using its id.
 * @param {number} postId - id of post to get.
 * @param {boolean} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 * @returns a json containing information for a single post.
 */
export async function getSinglePost(postId, alwaysUpdate = false) {
    if (alwaysUpdate) {
        return await fetchSinglePost(postId);
    }

    let posts = getLocalPostData();

    if (posts.length == 0) {
        let post = await fetchSinglePost(postId);
        saveLocalPostData(post, true);
        return post;
    }


    for (let post of posts.posts) {
        if (post.id == postId) {
            return post;
        }
    };

    let post = await fetchSinglePost(postId);
    return post;

}

/**
 * Get a list of all available tags to the API.
 * @param {boolean} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 * @returns A list of tags.
 */
export async function getAllPostTagsList(alwaysUpdate = false) {
    if (alwaysUpdate) {
        return await fetchAllPostTagsList();
    }

    return await fetchAllPostTagsList();
}