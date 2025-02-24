/**
 * get all users available to the API/localStorage.
 * @param {*} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 */
export async function getAllUsers(alwaysUpdate = false) {
    return (await fetch('https://dummyjson.com/users?limit=0')).json();
}

/**
 * Get a single user using its id.
 * @param {*} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 */
export async function getSingleUser(userId, alwaysUpdate = false) {
    return (await fetch('https://dummyjson.com/users/' + userId)).json();
}

