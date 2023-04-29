import { User } from "../@core/data/users"

export class ThreadEntity{

id:number
contents:string
threadCreator:User['name']
}