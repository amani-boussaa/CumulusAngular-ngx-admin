import { User } from "../../../Entity/User";

export class Blog {
    blog_id:number;
    title:string;
    author:string;
    date_created:Date;
    description:string;
    keywords:string;
    content:string;
    imagePath:any;
    bloguser: User;
    constructor(blog_id?: number, title?: string, content?: string, author?: string,date_created?:Date,keywords?:string,imagePath?:any,description?:string, bloguser?:User) {
        this.blog_id = blog_id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.date_created=date_created;
        this.keywords= keywords;
        this.imagePath=imagePath;
        this.description=description;
        this.bloguser=bloguser

      }
      getid(): number {
        return this.blog_id;
      }
    
      setid(id: number) {
        this.blog_id = id;
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
    
      getauthor(): string {
        return this.author;
      }
    
      setauthor(author: string) {
        this.author = author;
      }
    
      getkeywords(): string {
        return this.keywords;
      }
    
      setkeywords(keywords: string) {
        this.keywords = keywords;
      }

      getimagePath(): any {
        return this.imagePath;
      }

      setimagepath(imagePath: any) {
        this.imagePath = imagePath;
      }
      getdate_created(): Date {
        return this.date_created;
      }

      setdate_created(date_created: Date) {
        this.date_created = date_created;
      }
      getdescription(): string {
        return this.description;
      }

      setdescription(description: string) {
        this.description = description;
      }
      getbloguser(): User {
        return this.bloguser;
      }

      setbloguser(bloguser: User) {
        this.bloguser = bloguser;
      }
}
