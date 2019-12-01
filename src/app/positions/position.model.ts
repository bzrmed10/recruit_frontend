export class JobPosition {
    
    constructor ( public title : string ,
                  public description : string ,
                  public salary: string ,
                  public location : string,
                  public departement_id : string,
                  public created_at : Date,
                  public updated_at : Date){}
}