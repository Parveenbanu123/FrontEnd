export class Employee {
 
 
    constructor(
        public eid: number,
        public ename: string,
        public desg: string,
        public email: string,
        public salary: number,
        public mobile:number,
        public dept: string
    ) {
        this.eid = eid;
        this.ename = ename;
        this.desg = desg;
        this.email = email;
        this.salary = salary;
        this.mobile = mobile;
        this.dept = dept;
    }
}
 
 