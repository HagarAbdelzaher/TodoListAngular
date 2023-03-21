import {Guid} from "guid-typescript";


export class Todo{
  
    constructor(
        public id:Guid,
        public title: string,
        public isComplete:boolean,
        public isFavorite:boolean,
        public isDeleted:boolean
    ){}
}


// export interface Todo{
  
    
//     id:Guid,
//       title: string,
//       isComplete:boolean,
//       isFavorite:boolean
// }