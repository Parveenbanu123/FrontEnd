let names=['Parveen','Banu','Saranya']
console.log(names)
console.log(typeof names)//Object


let person={
    name:"Parveen",
    id:338,
    desg:"Developer"
}
console.log(person)

// class Student{
//     name="Parveen"
//     id=338
// }
class Student{ // type=Function
    sname:string;
    sid!:number;
    // constructor(){
    //     this.sname="Parveen";
    //     this.sid=338;
    // }
    constructor(sname:string,sid:number){
        this.sname=sname;
        this.sid=sid;
    }
}
//let s=new Student(); //type=object
// console.log(s.sname+" "+s.sid);
// s.sname="Saranya"
// s.sid=347
// console.log(s)


let sArray:Student[]=[new Student("Parveen",338),new Student("Saranya",347),new Student("Sathis",349)];
console.log(sArray);
for(let i=0;i<sArray.length;i++){
    console.log(sArray[i]!.sname.toUpperCase()+" "+sArray[i]?.sid)
}

