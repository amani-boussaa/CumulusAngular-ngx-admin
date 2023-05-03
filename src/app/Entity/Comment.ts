import { Thread} from "./Thread"
import { User } from "./User"


export class Comment{

id:number
content:string
user:User
commentedThread:Thread


public setId(id: number): void {
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }

  public setContent(content: string): void {
    this.content = content;
  }

  public getContent(): string {
    return this.content;
  }

  public setUser(user: User): void {
    this.user = user;
  }

  public getUser(): User {
    return this.user;
  }

  public setCommentedThread(thread: Thread): void {
    this.commentedThread = thread;
  }

  public getCommentedThread(): Thread {
    return this.commentedThread;
  }
}