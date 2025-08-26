/*
let newMembersHTML = '';

function renderMemberInfo() {
  
  newMembers.forEach((newMembers)=>{
      newMembersHTML = newMembersHTML + `
      <div class="js-member-data">
        <div>Full Name: ${newMembers.FullName}</div>
        <div>Nationality: ${newMembers.Nationality}</div>
        <div>Location: ${newMembers.Location}</div>
        <div>Contact: ${newMembers.PhoneNo}</div>
        <div>DoB: ${newMembers.DateOfBirth}</div>
        <div>Member No: ${newMembers.MemberNumber}</div>
      </div>
      `;    
      });

  document.querySelector('.js-member-data-grid').innerHTML = newMembersHTML;

  };
 renderMemberInfo();


/*
  newMembers.forEach((newMembers)=>{
      newMembersHTML = newMembersHTML + `
      <div class="js-member-data">
        <div>Full Name: ${newMembers.memberName}</div>
        <div>Nationality: ${newMembers.nationality}</div>
        <div>Location: ${newMembers.location}</div>
        <div>Contact: ${newMembers.phone}</div>
        <div>DoB: ${newMembers.dateOfBirth}</div>
        <div>Member No: ${newMembers.memberNumber}</div>
      </div>
      `;    
      });
  
document.querySelector('.js-member-data-grid').innerHTML = newMembersHTML;

document.querySelector('.js-show-active-members').addEventListener('click' , ()=>{
  renderMemberInfo();
});

*/