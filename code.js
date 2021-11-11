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
     
}
console.log(plusMinus([-2,-1,0,1,2]))