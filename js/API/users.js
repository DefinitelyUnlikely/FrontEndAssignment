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

/**
 * Get a specific amount of users per call. 
 * @param {*} limit - How many users to get. Defaults to 25 users.
 * @param {*} skip - How many users to skip. Defaults to 0.
 */
export async function getUsersPagination(limit = 25, skip = 0) {
    return (await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)).json();
}