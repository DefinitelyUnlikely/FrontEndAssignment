import { getCurrentlySelectedUser, getNewCommentId } from "../constants.js";
import { saveLocalCommentData } from "../services/comments.js";
import { renderSinglePost } from "./post.js";

export async function renderPostCommentBox(appendTo, post) {
    const commentLabel = document.createElement("label");
    const commentTextArea = document.createElement("textarea");
    commentTextArea.id = "comment-text";
    commentLabel.htmlFor = "comment-text";
    commentLabel.innerText = "Add comment..."
    commentLabel.id = "comment-label"

    const commentSubmit = document.createElement("button");
    commentSubmit.innerText = "Submit comment";
    commentSubmit.id = "comment-submit";

    appendTo.append(commentLabel);
    appendTo.append(commentTextArea);
    appendTo.append(commentSubmit);

    commentSubmit.addEventListener("click", () => {
        submitComment(post, commentTextArea.value);
    });
}


export async function submitComment(post, text) {
    const user = getCurrentlySelectedUser();

    if (!user) {
        console.log("No user selected");
        return;
    }

    if (text == "") {
        console.log("please enter a comment");
        return;
    }

    let nid = await getNewCommentId();
    let comment = {
        "id": nid,
        "body": text,
        "postId": post.id,
        "likes": 0,
        "user": {
            "id": user.id,
            "username": user.username,
            "fullName": user.fullName
        }
    }

    saveLocalCommentData(comment, post.id, true);
    renderSinglePost(post.id, post, true);

}