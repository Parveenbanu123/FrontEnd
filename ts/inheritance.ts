class Person{
    constructor(public name:string,public id:number){}
    sayHello(){
        console.log("hello "+this.name)
    }
}
interface User{
    email:string;
    pwd:string;
    getCredentials():void;
}
class Student extends Person implements User{
    constructor(public name:string,public id:number,public coursename:string,public email:string,public pwd:string){
        super(name,id);
    }
    getInfo(){
        console.log(this.name+" registered into "+this.coursename)
    }
    getCredentials(): void {
        console.log(this.email+" "+this.pwd);
    }
}
let s:Student=new Student("Parveen",338,"Java","parveen@gmail.com","parveen123")
s.sayHello();
s.getInfo();
s.getCredentials();


class Employee implements User{
    constructor(public email:string,public pwd:string){
        this.email=email;
        this.pwd=pwd;
    }
    getCredentials(): void {
        console.log(this.email+" "+this.pwd);
    }
}
let e:Employee=new Employee("parveen@gmail.com","Parveen@123");
e.getCredentials();