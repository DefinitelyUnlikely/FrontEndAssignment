export async function getCommentsByPost(postId, alwaysUpdate = false) {
    return (await fetch('https://dummyjson.com/comments/post/' + postId)).json();
}

export async function getSingleComment(commentId, alwaysUpdate = false) {

}