export async function getAllPosts() {
    return (await fetch('https://dummyjson.com/posts?limit=20')).json();
}

export function getSinglePost(postId) {

}