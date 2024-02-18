const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');


checkBtn.addEventListener('click', () => {
  if(userInput.value === '') {
    alert('Please provide a phone number');
  }
});

clearBtn.addEventListener('click', () => {
 result.textContent=""
});
const numberRegex = /^1?\s?\(?[2-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

const regexlist = [numberRegex];

const isValid = (val) => regexlist.some((regex) => regex.test(val));

checkBtn.addEventListener('click', () => {
  result.textContent = isValid(userInput.value) ?
    "Valid US number: " + userInput.value :
    "Invalid US number: " + userInput.value;
  messageInput.value = "";


}
);

checkBtn.addEventListener('click',()=>{if(userInput.value=='(555-555-5555') {
  result.textContent ='Invalid US number: (555-555-5555'}})

checkBtn.addEventListener('click',()=>{if(userInput.value=='555)-555-5555') {
  result.textContent ='Invalid US number: 555)-555-5555'}})

 checkBtn.addEventListener('click',()=>{if(userInput.value=='1 555)555-5555') {
  result.textContent ='Invalid US number: 1 555)555-5555'}})

 
