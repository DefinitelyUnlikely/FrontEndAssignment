export async function getCommentsByPost(postId) {
    return (await fetch('https://dummyjson.com/posts/' + postId + '/comments')).json();
}

export async function getSingleComment(commentId) {

}