export function getAllLocalComments() {
    const comments = localStorage.getItem("comments");

    if (comments == null) {
        return [];
    }

    return JSON.parse(comments);
}

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

export function saveLocalCommentData(comments, postId = null, single = false) {
    try {
        if (!postId) {
            localStorage.setItem("comments", JSON.stringify(localComments));
        }

        if (single) {
            let localComments = getLocalCommentsByPost(postId);
            localComments.comments.push(comments);
            localComments.limit = localComments.comments.length;
            localComments.total = localComments.comments.length;
            localStorage.setItem("comments/" + postId, JSON.stringify(localComments));
            return;
        }

        localStorage.setItem("comments/" + postId, JSON.stringify(comments));
    } catch (e) {
        throw new Error("Could not save comment data: " + e.Error);
    }
}