let person:[number,string]=[123,"Parveen"];
let persons:[number,string][]=[[349,'Sathis'],[347,'Saranya'],[340,'Praveenkumar'],[338,'Parveen']];
console.log(persons)

let arr=new Array<number>(5).fill(0);
//let mynums:readonly[number,number]=[43,56];
//let mynums=[23,45]as const;
//let mynums=Object.freeze([12,34]);
let mynums:[number,number]=[12,34];
let mynumsarr:number[]=[12,345,567];
mynumsarr.push(56);
mynumsarr.push(89);
mynums.push(67);