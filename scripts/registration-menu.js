const newMembers = [];

document.querySelector('.js-add-button').addEventListener('click', ()=>{
  addRegData();
});

function addRegData() {
const nameInputElem = document.querySelector('.js-fullname-input');
const memberName = nameInputElem.value;

const nationalityInputElm = document.querySelector('.js-nationality-input');
const nationality = nationalityInputElm.value;

const locationNameElem = document.querySelector('.js-location-input');
const location = locationNameElem.value;

const phoneNumElem = document.querySelector('.js-phone-num-input');
const phone = phoneNumElem.value;

const dateOfBirthElem = document.querySelector('.js-dob-input');
const dateOfBirth = dateOfBirthElem.value;

const memberNumberElem = document.querySelector('.js-identification-number-input');
const memberNumber = memberNumberElem.value;

//alert('Registration was Successful!');


newMembers.push(
{ FullName : memberName,
  Nationality : nationality,
  Location : location,
  PhoneNo : phone,
  DateOfBirth : dateOfBirth,
  MemberNumber : memberNumber
});

/*
let repetitiveMember;

newMembers.forEach((memberId)=>{
if (memberNumber === newMembers.memberNumber){
repetitiveMember = memberId;
alert('Repetitive Member Number!');
};
});

if(!repetitiveMember){
newMembers.push(
{ FullName : memberName,
  Nationality : nationality,
  Location : location,
  PhoneNo : phone,
  DateOfBirth : dateOfBirth,
  MemberNumber : memberNumber
});
};

*/
//setTimeout(()=>{alert('Data Submission Successful');}, 3000);
console.log(newMembers);
/*alert(`You have registered as ${memberName}, a ${nationality} citizen from ${location} of Id Number ${memberNumber}. Welcome!`);
*/
};

function storeData(){
const memberInfo = localStorage.setItem('memberData', JSON.stringify(newMembers));
};

document.querySelector('.js-submit-button').addEventListener('click', ()=>{
  storeData();
 //setTimeout(()=>{alert('Data Submission Successful');}, 3000);
});

/*let clickCounter = 0;
const maxClicks = 1;
const myButton = document.getElementById('registerButton');
  myButton.addEventListener('click' , () =>{
    clickCounter ++;

      if(clickCounter >= maxClicks){
        myButton.disabled = true;
        setTimeout(()=>{alert('Data Submission Successful');}, 3000);
        };
  });
*/



