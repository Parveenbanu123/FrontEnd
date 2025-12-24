enum status{
    PENDING=5,ACTIVE=10,APPROVED=15,REJECTED=20
}

let txStatus:status=status.PENDING;
//console.log(txStatus);

enum color{
    RED="stop",GREEN="go",YELLOW="alert"
}
txStatus=status.ACTIVE
let colormsg:color=color.RED;
console.log(colormsg);
if(txStatus===status.ACTIVE)
    console.log("Request is active,its in processing...")
