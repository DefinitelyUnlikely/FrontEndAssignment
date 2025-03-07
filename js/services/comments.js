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

export function saveLocalCommentData(comments, postId, replace = false) {
    try {
        if (replace) {
            localStorage.setItem("comments/" + postId, JSON.stringify(comments));
            return;
        }

        let localComments = getLocalCommentsByPost(postId);
        localComments.unshift(comments);
        localStorage.setItem("comments" + postId, JSON.stringify(localComments));

    } catch (e) {
        throw new Error("Could not save comment data");
    }
}