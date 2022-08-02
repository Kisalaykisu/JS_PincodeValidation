console.log("***** Welcome To PinCode Validation *****");

const pincodeRegex = RegExp("^[0-9]{6}$");

function validatePincode(pincode){
    if(pincodeRegex.test(pincode))
        console.log(pincode + " : Valid Pin Code !!");
    else
        throw pincode + " : PINCODE is Invalid !";
}

try{
    validatePincode("409988");
    validatePincode("40998B");
}
catch(e){
    console.error(e);
}