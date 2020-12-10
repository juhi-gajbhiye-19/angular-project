export class UserDetails {
    id:string;
    Book_title:string;
    Book_auther:string;
    Issued_Date:string;
    Due_Date:string;
   
    constructor(id,Book_title,Book_auther,Issued_Date,Due_Date){
        this.id=id;
        this.Book_title=Book_title;
        this.Book_auther=Book_auther;
        this.Issued_Date=Issued_Date;
        this.Due_Date=Due_Date;
    }
}
