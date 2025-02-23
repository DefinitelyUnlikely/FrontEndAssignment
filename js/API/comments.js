export async function getCommentsByPost(postId) {
    return (await fetch('https://dummyjson.com/comments/post/' + postId)).json();
}

export async function getSingleComment(commentId) {

}