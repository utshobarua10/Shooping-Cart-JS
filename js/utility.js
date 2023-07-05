// console.log('utility connected')

// Get the elements value
function getElementsValue(elementId){
    const currentField = document.getElementById(elementId);
    const currentValue = parseInt(currentField.value);
    return currentValue;

}

//Set the Increment value 
function incrementValue(elementId){
    const currentField = document.getElementById(elementId);
    let currentValue = parseInt(currentField.value);
    currentValue = currentValue+1;
    currentField.value = currentValue;
    return currentValue;
    
}

//Set the Decrement value 
function decrementValue(elementId){
    const currentField = document.getElementById(elementId);
    let currentValue = parseInt(currentField.value);
    currentValue = currentValue-1;
    currentField.value = currentValue;
    return currentValue;
    
}

// Remove the card area

function removeCardArea(elementId){
    const card = document.getElementById(elementId);
    card.style.display='none'
    return card

}

// Calculate price
function calculatePrice(elementId, totalOrder, isIncrement){
    const currentField = document.getElementById(elementId);
    
    const currentValue = currentField.innerText;
    console.log(currentValue)
    let currentPrice = parseInt(currentValue);
    
    if(elementId == 'case-price'){
        if(isIncrement == true){
            currentPrice = totalOrder * 59;
        }
        else{
            console.log('minus button clicked')
            currentPrice -= 59;
        }

    }
    else{
        
        if(isIncrement == true){
            currentPrice = totalOrder * 1219;
        }
        else{
            currentPrice -= 1219;
        }
    }
    
    currentField.innerText = currentPrice;
    return currentPrice;


}


// Calculate the whole price
function calculateWholePrice(phonePrice, casePrice, totalPrice){
    const phoneField = document.getElementById(phonePrice);
    const caseField = document.getElementById(casePrice);
    const totalField = document.getElementById(totalPrice);
    const subTotalField = document.getElementById('sub-total-price');
    
    const phoneValue = parseInt(phoneField.innerText);
    const caseValue = parseInt(caseField.innerText);
    const totalValue = phoneValue + caseValue;
    totalField.innerText = totalValue;
    subTotalField.innerText = totalValue;
    return totalValue
}

