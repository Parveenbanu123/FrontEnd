// const names=["Parveen","Banu","Saranya"];
// for(let i=0;i<names.length;i++)
//     document.writeln(names[i]+"<br>")

let persons=[{
    name:"Parveen",
    id:338,
    salary:30000,
    desg:"Developer"
},
{
    name:"Banu",
    id:339,
    salary:40000,
    desg:"Developer"
},
{
    name:"Saranya",
    id:347,
    salary:50000,
    desg:"Developer"
},
{
    name:"Sathis",
    id:349,
    salary:80000,
    desg:"Developer"
}
]

//persons.forEach(person=>{document.writeln(person.name+"|"+person.id+"|"+person.salary+"|"+person.desg+"<br>")})
document.writeln("<table border=3><tr><th>Id</th><th>Name</th><th>Salary</th><th>Designation</th></tr>")
persons.forEach(p=>{
    document.writeln("<tr><td>"+p.id+"</td>")
    document.writeln("<td>"+p.name+"</td>")
    document.writeln("<td>"+p.salary+"</td>")
    document.writeln("<td>"+p.desg+"</td></tr>")
})
document.writeln("</table>")
