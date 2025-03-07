import { getCurrentlySelectedUser } from "../constants.js";
import { saveLocalCommentData } from "../services/comments.js";

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
        submitComment(post, commentTextArea.value)
    });
}


export function submitComment(post, text) {
    const user = getCurrentlySelectedUser();

    if (!user) {
        console.log("No user selected");
        return;
    }

    if (text == "") {
        console.log("please enter a comment");
        return;
    }

    let comment = {
        "id": 1,
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

}