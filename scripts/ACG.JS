//displaying about us info
function renderAboutUs(){
  const aboutUs = document.getElementById("aboutUsLink")
  aboutUs.classList.toggle("show-about-us");
};

function renderWhatWeDo(){
  const whatWeDo=document.getElementById('whatWeDo');
  whatWeDo.classList.toggle('show-what-we-do');
};

document.querySelector('.about-us-link').addEventListener('click',()=>{
  renderAboutUs();
});
document.querySelector('.what-we-do-link').addEventListener('click',()=>{
  renderWhatWeDo();
});

//display modes (normal/dark modes)
function displayToggleMode(){
    const icon = document.querySelector('.profile-pic');
    icon.src = '/icons/group-icon.jpg';
    
    icon.addEventListener('click', ()=>{
      if (icon.src = '/icons/group-icon.jpg'){
        icon.src = '/icons/group-icon-dark.png';
      }else{icon.src = '/icons/group-icon.jpg';}
      });
    

      icon.addEventListener('click', ()=>{
        if(document.body.style.backgroundColor !== 'black'){
          document.body.style.backgroundColor = 'black';
          document.body.style.color = 'white';
        } else{
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
        }

      })
};
displayToggleMode();

//activities library
const photoLibrary = [
  {src: '/photos/56.jpg', altText: "Group members", title: 'Members'},
  {src: '/photos/joshua1.jpg', altText: "Parental visitation", title: 'Parental visitation'},
  {src: '/photos/54.jpg', altText: "A parent giving advice and blessings to the  members", title: 'Parent blessings'},
  {src: '/photos/27.jpg', altText: "A members family visitation", title: 'A members family visitation'}
  ];
 const photosContainer = document.querySelector('.photo-library');

  photoLibrary.forEach((photos)=>{
    const photoDiv = document.createElement('div');
    photoDiv.className = 'photo-div';
    const photoElem = document.createElement('img');
    const photoText = document.createElement('div');
    photoText.className= 'photo-text-div';
    photoText.innerHTML = photos.title;
    photoElem.className = 'photo-library-image';
    photoElem.src = photos.src;
    photoElem.alt = photos.altText;
    photoDiv.append(photoElem, photoText);
    photosContainer.appendChild(photoDiv);
  }
  );


/*const listInfo = [{
  FullName : 'Derrick Peter K.',
  Nationality : 'Kenyan',
  Location : 'Runyenjes',
  PhoneNo : '0746097143',
  MemberNumber :'34611843',
  Position: 'ChairPerson' 
},
 {FullName : 'Mwenda Justin',
  Nationality : 'Kenyan',
  Location : 'Runyenjes',
  PhoneNo : '0791338151',
  MemberNumber :'33422555',
  Position: 'Secretary'
}
];

function displayMembers(){
  let membersList = '';
  let html = '';
  let member = document.querySelector('.js-members-list-details');
  const div = document.createElement('div');

  listInfo.forEach((listInfo)=>{
  html += `
  Name: ${listInfo.FullName}
  Nationality: ${listInfo.Nationality}
  Location: ${listInfo.Location}
  Member Number: ${listInfo.MemberNumber}
  Position: ${listInfo.Position}
  `
  });
    div.textContent = html;
   member.appendChild(div);
   membersList += member;
};
displayMembers();
*/

//members list html generation
const memberList = [{
  FullName : 'Derrick Peter K.',
  Nationality : 'Kenyan',
  Location : 'Runyenjes',
  PhoneNo : '0746097143',
  MemberNumber :'34611843',
  Position: 'ChairPerson' 
},
{
  FullName : 'Mwenda Justin',
  Nationality : 'Kenyan',
  Location : 'Runyenjes',
  PhoneNo : '0791338151',
  MemberNumber :'33422555',
  Position: 'Secretary'
},
{
  FullName : 'Titus Murimi',
  Nationality : 'Kenyan',
  Location : 'Runyenjes',
  PhoneNo : '0748861773',
  MemberNumber :'39430693',
  Position: 'Treasurer'
},
{
  FullName : 'Antony Mugambi',
  Nationality : 'Kenyan',
  Location : 'Runyenjes',
  PhoneNo : '0790504429',
  MemberNumber :'30081632',
  Position:'Member'
},
{
  FullName : 'Joshua Mutugi Nyaga',
  Nationality : 'Kenyan',
  Location : 'Runyenjes',
  PhoneNo :'0115287788',
  MemberNumber :'40764828',
  Position: 'Member'
},
{
  FullName : 'Emmanuel Munene',
  Nationality : 'Kenyan',
  Location : 'Runyenjes',
  PhoneNo :'0708822584',
  MemberNumber :'31027571',
  Position: 'Member'
},
{
  FullName : 'Nancy Chirchir',
  Nationality : 'Kenyan',
  Location : 'Eldoret',
  PhoneNo :'0708235773',
  MemberNumber :'29475596',
  Position: 'Member'
},
{
  FullName : 'Kennedy Mwenda',
  Nationality : 'Kenyan',
  Location : 'Runyenjes',
  PhoneNo :'0798455377',
  MemberNumber :'34656921',
  Position: 'Member'
},
{
  FullName : 'Janet Betty Mumbi',
  Nationality : 'Kenyan',
  Location : 'Runyenjes',
  PhoneNo :'0710369959',
  MemberNumber :'27071995',
  Position: 'Member'
},
{
  FullName : 'Veronica Ruguru Gatheca',
  Nationality : 'Kenyan',
  Location : 'Gatundu',
  PhoneNo :'0768804074',
  MemberNumber :'36703869',
  Position: 'Member'
},
{
  FullName : 'Martin Fundi',
  Nationality : 'Kenyan',
  Location : 'Gatundu',
  PhoneNo :'0714247281',
  MemberNumber :'33056813',
  Position: 'Member'
},
{
  FullName : 'Lilian Mukami',
  Nationality : 'Kenyan',
  Location : 'Runyenjes',
  PhoneNo :'0755839172',
  MemberNumber :'34214423',
  Position: 'Member'
},
{
  FullName : 'Cakston Njiru',
  Nationality : 'Kenyan',
  Location : 'Runyenjes',
  PhoneNo :'0724426855',
  MemberNumber :'33109512',
  Position: 'Member'
},
];




const memberBtn = document.querySelector('.js-show-member-list');
const hideBtn = document.querySelector('.js-hide-button');

//generating html for each member
function memberListHtml (){
  let memberListHTML = '';
  buttonContent = memberBtn.textContent = 'Members'
  
  memberList.forEach((memberList)=>{
    memberListHTML += `
    <div class="js-member-data">
        <div class="js-entry-record">Name: ${memberList.FullName}</div>
        <div class="js-entry-record">Nationality: ${memberList.Nationality}</div>
        <div class="js-entry-record">Location: ${memberList.Location}</div>
        <div class="js-entry-record">Member No: ${memberList.MemberNumber}</div>
        <div class="js-entry-record">Position Held: ${memberList.Position}</div>
      </div>
  ` 
});
//displaying list on document window
 document.querySelector('.js-show-member-list').addEventListener('click', ()=>{
    if (document.querySelector('.js-members-list-details').innerHTML = ''){
      document.querySelector('.js-members-list-details').innerHTML = memberListHTML;
    } else{
      document.querySelector('.js-members-list-details').innerHTML = memberListHTML;
      hideBtn.textContent = 'Hide List'
    }
    });
};
memberListHtml();

//changing member button text
/*memberBtn.addEventListener('click', ()=>{
  let clickCounter = 0;
  const maxClicks = 1;
  clickCounter++;

  if (clickCounter >= 1){
    memberBtn.textContent = 'Active Members'; 
    hideBtn.textContent = 'Hide List';
  };
});
*/

//removing member list html
function removeMemberListHtml (){
hideBtn.addEventListener('click', ()=>{
document.querySelector('.js-members-list-details').innerHTML = '';
hideBtn.textContent = '';
})};
removeMemberListHtml();

//generating right side bar html
function rightSideBar(){
const rightBar=document.querySelector('.right-side-1');
const div1 = document.createElement('div');
div1.className='js-div-1';
const p1=document.createTextNode('p');
p1.textContent='Empowering lives, one person at a time';
const div1Image=document.createElement('img');
div1Image.src = '/icons/children1.jpeg';
div1Image.className='children-pic-1';
div1.append(p1, div1Image);

const div2 = document.createElement('div');
div2.className='js-div-2'
const p2=document.createTextNode('p');
p2.textContent='Donate & make a difference with every cent!';
const donateBtn = document.createElement('button');
donateBtn.className='donate-button';
donateBtn.type='button';
const donateIcon=document.createElement('img');
donateIcon.src = '/icons/donation1.jpeg';
donateIcon.className='donate-icon';
const text=document.createElement('div');
text.innerHTML='KINDLY DONATE!';
text.className='js-donate-title';
donateBtn.append(donateIcon, text);
div2.append(p2, donateBtn);

//generating contact html
function contactInfo () {
  const contact = document.querySelector('.contact-info');
  contact.className = 'contact-info'
  const heading = document.createTextNode('h1');
  heading.textContent = 'For more information, call or Whatsapp:';

  const chairman = document.createElement('div');
  chairman.className = 'chairman-info';
  const chairmanContact = document.createTextNode('p');
  chairmanContact.textContent = 'Chairman  +254746097143';

  const secretary = document.createElement('div');
  secretary.className = 'secretary-info';
  const secretaryContact = document.createTextNode('p');
  secretaryContact.textContent = 'Secretary  +254791338151';
  
  
  const treasurer = document.createElement('div');
  treasurer.className = 'treasurer-info';
  const treasurerContact = document.createTextNode('p');
  treasurerContact.textContent = 'Treasurer  +254748617773';

  const email = document.createElement('div');
  email.className = 'email-info';
  const emailContact = document.createTextNode('p');
  emailContact.textContent = 'amazingcharitygroup@gmail.com';
  
  chairman.append(chairmanContact);
  treasurer.append(treasurerContact);
  secretary.append(secretaryContact);
  email.append(emailContact);
  
  contact.append(heading, chairman, treasurer, secretary,email);
};
contactInfo();
rightBar.append(div1, div2);
};
rightSideBar();

//rendering donation Popup 
function donationPopUp(){
  const myPopup = document.getElementById('myPopup');
  myPopup.showModal();
  };
document.querySelector('.donate-button').addEventListener('click', ()=>{
  donationPopUp();
});
document.querySelector('.donate-link').addEventListener('click', ()=>{
  donationPopUp();
});
document.getElementById('closePopup').addEventListener('click',()=>{
myPopup.close();
});


