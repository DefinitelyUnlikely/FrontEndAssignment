import { fetchAllUsers, fetchSingleUser, fetchUsersPagination } from "../API/users.js";
import { getLocalUserData } from "../services/localStorage.js";

/**
 * get all users available to the API/localStorage.
 * @param {boolean} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 */
export async function getAllUsers(alwaysUpdate = false) {
    if (alwaysUpdate) {
        return await fetchAllUsers();
    }

    let users = getLocalUserData();
    if (users == []) {
        users = await fetchAllUsers();
    }
    return users;
}

/**
 * Get a single user using its id.
 * @param {number} userId - id of user to get.
 * @param {boolean} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 */
export async function getSingleUser(userId, alwaysUpdate = false) {
    if (alwaysUpdate) {
        return await fetchSingleUser(userId);
    }
}

/**
 * Get a specific amount of users per call. 
 * @param {number} limit - How many users to get. Defaults to 25 users.
 * @param {number} skip - How many users to skip. Defaults to 0.
 */
export async function getUsersPagination(limit = 25, skip = 0) {
    if (!alwaysUpdate) {
        return (await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)).json();
    }
    return (await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)).json();
}