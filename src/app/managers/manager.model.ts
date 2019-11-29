export class Manager {

    constructor(
                public id : number ,
                public firstName : string ,
                public lastName : string , 
                public email : string , 
                public status : string,
                public phone ?: string,
                public departement_id?: number ){}
}