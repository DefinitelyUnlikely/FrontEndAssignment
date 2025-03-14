import { fetchAllUsers, fetchSingleUser, fetchUsersPagination } from "../API/users.js";
import { getLocalUserData, getSingleLocalUserData, saveLocalUserData } from "../services/users.js";

/**
 * get all users available to the API/localStorage.
 * @param {boolean} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 */
export async function getAllUsers(alwaysUpdate = false) {
    if (alwaysUpdate) {
        let users = await fetchAllUsers();
        saveLocalUserData(users);
        return;
    }

    let users = getLocalUserData();
    if (!users) {
        users = await fetchAllUsers();
        saveLocalUserData(users);

    }

    return users;
}

/**
 * Get a single user using its id.
 * @param {number} userId - id of user to get.
 * @param {boolean} alwaysUpdate - set to true to always fetch data from the API instead of using localStorage.
 */
export async function getSingleUser(userId, alwaysUpdate = false) {
    let user;

    if (alwaysUpdate) {
        user = await fetchSingleUser();
        saveLocalUserData(user, true);
        return user;
    }

    user = getSingleLocalUserData(userId);

    if (!user) {
        let users = await getAllUsers();

        for (let u of users) {
            if (u.id == userId) {
                return u;
            }
        }
    }
}

/**
 * Get a specific amount of users per call. 
 * @param {number} limit - How many users to get. Defaults to 25 users.
 * @param {number} skip - How many users to skip. Defaults to 0.
 */
export async function getUsersPagination(limit = 25, skip = 0) {
    return (await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)).json();
}