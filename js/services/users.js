export function getLocalUserData() {
    try {
        const users = localStorage.getItem("users");

        if (!users) {
            return users;
        }

        return JSON.parse(users);

    } catch (e) {
        throw new Error("Could not get data");
    }
}

export function getSingleLocalUserData(userId) {
    try {
        const user = localStorage.getItem("users/" + userId);

        if (!user) {
            return user;
        }

        return JSON.parse(user);

    } catch (e) {
        throw new Error("Could not get data");
    }
}

export function saveLocalUserData(users, single = false) {
    try {
        if (single) {
            localStorage.setItem("users/" + users.id, JSON.stringify(users));
        }

        localStorage.setItem("users", JSON.stringify(users));

    } catch (e) {
        throw new Error("Could not save user data");
    }
}