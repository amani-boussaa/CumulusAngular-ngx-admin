
import { Comment } from "./Comment"
import { User } from "./User"

export class ThreadEntity{

id:number
title:string
contents:string
threadCreator:User
comments:Comment
}