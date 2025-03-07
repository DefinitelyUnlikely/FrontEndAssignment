export function getLocalUserData() {
    try {
        const users = localStorage.getItem("users");

        if (users == null) {
            return [];
        }

        return JSON.parse(users);

    } catch (e) {
        throw new Error("Could not get data");
    }
}

export function saveLocalUserData(users, replace = false) {
    try {
        if (replace) {
            localStorage.setItem("users", JSON.stringify(users));

            return;
        }

        let localUsers = getLocalUserData();
        localUsers.unshift(users);
        localStorage.setItem("users", JSON.stringify(localUsers));

    } catch (e) {
        throw new Error("Could not save user data");
    }
}