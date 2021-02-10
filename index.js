document.getElementById('contactForm').addEventListener ('submit', submitForm);

function submitForm(e){
    e.preventDefault();
   
    var FirstName = getInputVal('FirstName');
    var LastName = getInputVal('LastName');
    var Education = getInputVal('Education');
    var Phone_Number = getInputVal('Phone_Number');
    var City = getInputVal('City');
    var Pin_No = getInputVal('Pin_No');
    var Password = getInputVal('Password');
    console.log(FirstName);
    console.log(LastName);
    console.log(Education);
    console.log(Phone_Number);
    console.log(City);
    console.log(Pin_No);
    console.log(Password);
}

function getInputVal(id){
return document.getElementById(id).value;
}