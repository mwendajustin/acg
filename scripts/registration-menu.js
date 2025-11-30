const newMembers = [
  {lastName: 'mwenda',
    firstName:'justin',
    Nationality:'kenyan',
    Location:'runyenjes',
    Contact:'0791338151',
    idNumber:'33422555',
    dateOfBirth:'12/03/1996'
  },
 {lastName: 'justin',
    firstName:'mwenda',
    Nationality:'kenyan',
    Location:'runyenjes',
    Contact:'0752750553',
    idNumber:'33422555',
    dateOfBirth:'12/03/1996'
  },
  {lastName: 'ken',
    firstName:'mutugi',
    Nationality:'kenyan',
    Location:'runyenjes',
    Contact:'0752750553',
    idNumber:'33422555',
    dateOfBirth:'12/03/1990'
  },];

function saveDetails (){ 
localStorage.setItem('storedDetails', JSON.stringify(newMembers));
};
document.querySelector('.submit-button').addEventListener('click', ()=>{saveDetails();});


const retrievedNewMembers = localStorage.getItem('storedDetails');
let membersHTML = "";

function renderMemberDetails() {

try{
  const retrievedNewMembersArray = JSON.parse(retrievedNewMembers);
  
    if(Array.isArray(retrievedNewMembersArray)) {
      retrievedNewMembersArray.forEach((Members)=>{
      membersHTML = membersHTML + `
      <div class="js-member-data">
        <div>Full Name: ${Members.lastName + Members.firstName}</div>
        <div>Nationality: ${Members.Nationality}</div>
        <div>Location: ${Members.Location}</div>
        <div>Contact: ${Members.Contact}</div>
        <div>Member No: ${Members.idNumber}</div>
        <div>Date of Birth: ${Members.dateOfBirth}</div>
      </div>
      `;    
      });

  document.getElementbyId('memberContainer').innerHTML =membersHTML;
    } else{
      console.log('retrive was not successful!');        
      }
    } catch(error){
      console.error('stored details does not exist.');
    };
};
document.getElementById('activeMemberButton').addEventListener('click', ()=>{renderMemberDetails();});
