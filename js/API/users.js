export async function getAllUsers(alwaysUpdate = false) {

    fetch('https://dummyjson.com/users?limit=0')
        .then(res => res.json())
        .then(console.log);
}

export async function getSingleUser(userId, alwaysUpdate = false) {
    return (await fetch('https://dummyjson.com/users/' + userId)).json();
}

