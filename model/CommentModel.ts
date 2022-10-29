export default class CommentModel {
    id: string;
    username: string;
    text: string;
    date: Date;
    comments: CommentModel[];

    constructor(id: string, username: string, text: string, date: Date, comments: CommentModel[]) {
        this.id = id;
        this.username = username;
        this.text = text;
        this.date = date;
        this.comments = comments;
    }
}
