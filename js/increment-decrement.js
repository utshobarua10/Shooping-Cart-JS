
document.getElementById('case-plus-btn').addEventListener('click',function(){
    const currentValue = incrementValue('case-number');
    const isIncrement = true;
    calculatePrice('case-price',currentValue,isIncrement)
    calculateWholePrice('case-price','phone-price','total-price')
})
document.getElementById('case-minus-btn').addEventListener('click',function(){
    const currentValue = decrementValue('case-number');
    const isIncrement = false;
    calculatePrice('case-price',currentValue,isIncrement)
    calculateWholePrice('case-price','phone-price','total-price')
})

document.getElementById('phone-plus-btn').addEventListener('click',function(){
    const currentValue = incrementValue('phone-number')
    const isIncrement = true;
    calculatePrice('phone-price',currentValue,isIncrement)
    calculateWholePrice('case-price','phone-price','total-price')
})
document.getElementById('phone-minus-btn').addEventListener('click',function(){
    const isIncrement = false;
    const currentValue = decrementValue('phone-number');
    calculatePrice('phone-price',currentValue,isIncrement);
    calculateWholePrice('case-price','phone-price','total-price')
})
// document.getElementById('check-out').addEventListener('click',function(){
//         console.log(calculateWholePrice('case-price','phone-price','total-price'))
        

// })