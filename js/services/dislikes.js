import { getSinglePost } from "../data/posts.js";

export async function changePostDislikes(postId, remove = false) {
    let post = await getSinglePost(postId);
}
