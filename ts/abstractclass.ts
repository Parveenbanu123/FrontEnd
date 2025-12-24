abstract class Account{
    accno:string
    accname:string
    ifsc:string
    constructor(accno:string,accname:string,ifsc:string){
        this.accno=accno
        this.accname=accname
        this.ifsc=ifsc
    }
}

class SavingAccount extends Account{
    balance:number
    constructor(accno:string,accname:string,ifsc:string,balance:number){
        super(accno,accname,ifsc)
        this.balance=balance
    }
}

let sa:SavingAccount=new SavingAccount("09876421233556","Sathis","icic789",1000)
console.log(sa)