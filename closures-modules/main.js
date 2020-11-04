//ex1
function StringFormatter()
{
    function CapitalizeFirst(strr)
    {
        return (strr[0].toUpperCase()+
        strr.toLowerCase()).slice(1,strr.length)
        
    }
    function SkewerCase(strr)
    {
        const lst = strr.split(' ')
        new_str = ""
        i = 0

        for (word of lst){
            new_str += word 
            if(i < lst.length -1 )
            {
                new_str += "-"
            }
            i++
        }
        return new_str
    }
    return{
        capitalizeFirst : CapitalizeFirst,
        skewerCase : SkewerCase
    }
}




const formatter = StringFormatter()
console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box

//ex2
const Bank = function () {
	
    let money = 500

    const depositCash = function (cash) {
        money += cash
    }

    const checkBalance = function () {
        console.log(money)
    }

    return {
        deposit: depositCash,
        showBalance: checkBalance
    }

}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

