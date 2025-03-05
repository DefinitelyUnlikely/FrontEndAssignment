/**
 * get all users available to the API/localStorage.
 */
export async function fetchAllUsers() {
    return (await fetch('https://dummyjson.com/users?limit=0')).json();
}

/**
 * Get a single user using its id.
 * @param {number} userId - id of user to get.
 */
export async function fetchSingleUser(userId) {
    return (await fetch('https://dummyjson.com/users/' + userId)).json();
}

/**
 * Get a specific amount of users per call. 
 * @param {number} limit - How many users to get. Defaults to 25 users.
 * @param {number} skip - How many users to skip. Defaults to 0.
 */
export async function fetchUsersPagination(limit = 25, skip = 0) {
    return (await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)).json();
}