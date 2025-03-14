export function getLocalUserData() {
    try {
        const users = localStorage.getItem("users");

        if (users == null) {
            return null;
        }

        return JSON.parse(users);

    } catch (e) {
        throw new Error("Could not get data");
    }
}

export function saveLocalUserData(users, single = false) {
    try {
        if (single) {
            let localUsers = getLocalUserData();
            localUsers.unshift(users);
            localStorage.setItem("users", JSON.stringify(localUsers));
            return;
        }

        localStorage.setItem("users", JSON.stringify(users));
    } catch (e) {
        throw new Error("Could not save user data");
    }
}