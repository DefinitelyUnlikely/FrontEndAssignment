export function getLocalCommentsByPost(postId) {
    try {
        const comments = localStorage.getItem("comments/" + postId);

        if (comments == null) {
            return [];
        }

        return JSON.parse(comments);

    } catch (e) {
        throw new Error("Could not get data");
    }

}

export function saveLocalCommentData(comments, postId, single = false) {
    try {
        if (single) {
            let localComments = getLocalCommentsData();
            localComments.unshift(comments);
            localStorage.setItem("comments" + postId, JSON.stringify(localComments));
            return;
        }

        localStorage.setItem("comments", JSON.stringify(comments));
    } catch (e) {
        throw new Error("Could not save comment data");
    }
}