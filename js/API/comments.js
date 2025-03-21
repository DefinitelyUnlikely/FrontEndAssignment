/**
 * 
 * @returns all comments available to the API
 */
export async function fetchAllComments() {
    let response = await fetch('https://dummyjson.com/comments')

    if (!response.ok) {
        return []
    }

    return response.json().then(response => response.comments)
}

/**
 * get all comments on a specific post, by post id, available to the API/localStorage.
 * @param {number} postId - id of post to et comments for.
 */
export async function fetchCommentsByPost(postId) {
    let response = await fetch('https://dummyjson.com/comments/post/' + postId)

    if (!response.ok) {
        return []
    }

    return response.json().then(response => response.comments)
}
