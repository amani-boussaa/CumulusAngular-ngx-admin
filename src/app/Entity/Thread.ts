
import { Comment } from "./Comment"
import { User } from "./User"

export class Thread{

id:number
title:string
contents:string
threadCreator:User
comments:Comment
}