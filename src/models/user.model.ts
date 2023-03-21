import {Guid} from "guid-typescript";


export class User{
  
    constructor(
        public id:Guid,
        public username: string,
        public password:string,
        public quote:string
    ){}
}
