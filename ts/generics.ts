function sayHello<T>(t:T):void{
    console.log(t)
}

function getName(name:string):string{
    return name.toUpperCase();
}


sayHello("SATHIS")
sayHello(123)

let p={
    name:"Sathis",
    id:349
}
sayHello(p)
sayHello(getName("Parveen"))
let myname="Parveen"
sayHello(myname.toUpperCase())


class Container<T>{
    constructor(public t:T){}
    getValue():T{
        return this.t;
    }
}
let numContainer:Container<number>=new Container(78);
let nameContainer:Container<string>=new Container("Sathis");
let objectContainer:Container<Object>=new Container(p);
console.log(numContainer);
console.log(nameContainer);
console.log(objectContainer);


