export async function getAllPosts(alwaysUpdate = false) {
    return (await fetch('https://dummyjson.com/posts?limit=20')).json();
}

export function getSinglePost(postId, alwaysUpdate = false) {

}