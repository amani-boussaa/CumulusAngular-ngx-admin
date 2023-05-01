import { User } from "../@core/data/users"

export class ThreadEntity{

id:number
title:string
contents:string
threadCreator:User['name']
}