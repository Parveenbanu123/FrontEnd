//console.log("Parveen");
function signup(){
    event.preventDefault();
    // let uid=document.getElementById("uid").value;
    // let uname=document.getElementById("uname").value;
    // let pwd=document.getElementById("pwd").value;
    // let cpwd=document.getElementById("cpwd").value;
    // let mobile=document.getElementById("mobile").value;
    // let email=document.getElementById("email").value;
    // let dob=document.getElementById("dob").value;
    // let gender=document.querySelector('input[name="gen"]:checked').value;
    
    // console.log(uid+"\n"+uname+"\n"+pwd+"\n"+cpwd+"\n"+mobile+"\n"+email+"\n"+dob+"\n"+gender);

    //let skill=document.querySelectorAll('input[name="skill"]:checked');
    //let val=[]
    // skill.forEach(element=>{
    //     val.push(element.value);
    // })
    // console.log(val)
    //skill.forEach(e=>console.log(e.value))

    let qual=document.getElementById("qual").value;
    let addr=document.getElementById("addr").value;
    let like=document.getElementById("like").value;
    let photo=document.getElementById("photo").value;
    let res=document.getElementById("resume").value;
    console.log(qual+"\n"+addr+"\n"+photo+"\n"+res+"\n"+like);


}