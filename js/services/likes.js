import { getCommentsByPost } from "../data/comments.js";
import { getSinglePost } from "../data/posts.js";

export async function changePostLikes(postId, remove = false) {
    let post = await getSinglePost(postId);


}

export async function changeCommentLikes(postId, commentId, remove = false) {
    let comments = await getCommentsByPost(postId);

}