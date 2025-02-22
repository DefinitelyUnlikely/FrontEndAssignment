export async function getAllUsers() {

    fetch('https://dummyjson.com/users?limit=0')
        .then(res => res.json())
        .then(console.log);
}

export async function getSingleUser(userId) {
    return (await fetch('https://dummyjson.com/users/' + userId)).json();
}

