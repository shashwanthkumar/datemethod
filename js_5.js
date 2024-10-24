
// Generate a 6-digit alpha-numeric code

function otp(length){
    let chr='tirumalaprasad0123456789';
    let code='';
    for(let i=0;i<length;i++){
        let rn=Math.floor(Math.random()*chr.length);
        code += chr[rn]
    }
    return code;
}
let sixdig=otp(6)
console.log(sixdig);



let today=new Date()
let day=today.getDay()

let age=prompt("Enter your age then i will say how many days you lived")
function ages(){
    console.log((age*365.25).toFixed(0))
}
ages()

// difference b/w two dates and return days,months,years

function datediff(startDate,endDate){
    let yrs=startDate.getFullYear()-endDate.getFullYear()   
    let month=startDate.getMonth()-endDate.getMonth()      
    let days=startDate.getDate()-endDate.getDate()        
    return{
        years:Math.abs(yrs),
        months:Math.abs(month),
        day:Math.abs(days)
    };
}

let date1=new Date()                  
let date2=new Date("2002-10-7")      
let diff=datediff(date1,date2)        
console.log(diff.years)
console.log(diff.months)
console.log(diff.day)
