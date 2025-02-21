export function getAllUsers() {

    fetch('https://dummyjson.com/users?limit=0')
        .then(res => res.json())
        .then(console.log);
}

export function getSingleUser(userId) {
    fetch('https://dummyjson.com/users/' + userId)
        .then(res => res.json())
        .then(console.log);
}

