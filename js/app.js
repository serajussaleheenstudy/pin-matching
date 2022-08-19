function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('get pin not 4 digit', pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);

    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();

    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById
    ('typed-numbers');
     const previousTypeNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits= previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;

            // console.log(previousTypeNumber); // previous number could show
        }
    }
    else{
        const previousTypeNumber = typedNumberField.value;     
        const newTypeNumber = previousTypeNumber + number;
        typedNumberField.value = newTypeNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMeassage = document.getElementById('pin-failure');

    if(typedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinFailureMeassage.style.display = 'none';
    }
    else{
        pinFailureMeassage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})

