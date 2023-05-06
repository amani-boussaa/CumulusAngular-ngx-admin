import { Comment } from "./Comment"
import { User } from "./User"

export class Thread {
  private id: number;
  private title: string;
  private content: string;
  private threadCreator: User;
  private comments: Comment;

  getid(): number {
    return this.id;
  }

  setid(id: number) {
    this.id = id;
  }

  gettitle(): string {
    return this.title;
  }

  settitle(title: string) {
    this.title = title;
  }

  getcontent(): string {
    return this.content;
  }

  setcontent(content: string) {
    this.content = content;
  }

  getthreadCreator(): User {
    return this.threadCreator;
  }

  setthreadCreator(threadCreator: User) {
    this.threadCreator = threadCreator;
  }

  getcomments(): Comment {
    return this.comments;
  }

  setcomments(comments: Comment) {
    this.comments = comments;
  }
}