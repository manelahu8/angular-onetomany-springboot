import { Book } from './book';

export class Student {
    private id:number;
    private rollNo:number;
    private name:string;
    private email:string;
    private college:string;
    private branch:string;    
    private books:Book[];

    public constructor(init?: Partial<Student>) {
        Object.assign(this, init);
    }
}
