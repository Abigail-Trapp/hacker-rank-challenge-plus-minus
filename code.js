// let enter = document.getElementById("enter")
// enter.addEventListener("click",plusMinus)

function plusMinus(arr) {
    // Write your code here
     let INTEGER_ARRAY = [...arr]
     
     let calcPos = INTEGER_ARRAY.filter(item => item > 0).reduce((acc,n)=> acc+1,0)
     let calcNeg = INTEGER_ARRAY.filter(item => item < 0).reduce((acc,n)=>acc+1,0)
     let calcZero = INTEGER_ARRAY.filter(item => item === 0).reduce((acc,n)=>acc+1,0)
     
     let arrayLength = INTEGER_ARRAY.length
     
     console.log(calcPos/arrayLength)
     console.log(calcNeg/arrayLength)
     console.log(calcZero/arrayLength)

    //  let positives=document.querySelector("positives")
    //  let posNumber = document.createElement("div")
    //  posNumber.innerHTML=`${calcPos}`
    //  positives.append(posNumber)

    //  let negatives=document.querySelector("negatives")
    //  let negNumber=document.createElement("div")
    //  negNumber.innerHTML=`${calcNeg}`
    //  negatives.append(negNumber)

    //  let zeros=document.querySelector("zeros")
    //  let zeroNumber=document.createElement("div")
    //  zeroNumber.innerHTML=`${calcZero}`
    //  zeros.append(zeroNumber)


}
plusMinus([-1,1,0,1,2])
// let arrayValue = document.querySelector("arrayvalue").value; 
// plusMinus(arrayValue)