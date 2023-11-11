const btnEl = document.querySelector('.btn');
const inputs = document.querySelector('.dates');
const result = document.querySelector('.str');

function calculateAge(){
  const inputVal = inputs.value;
  // console.log(inputVal);
  if(inputVal === '') alert(`Please enter your birthday.`);
  const age = getAge(inputVal);
  return result.innerHTML = `You are ${age} ${age > 1 ? 'years' : 'year'} old.`
}

function getAge(val) {
  const currentDate = new Date();
  const birthDate = new Date(val);
  let year = currentDate.getFullYear() - birthDate.getFullYear();
  console.log(year);
  const month = currentDate.getMonth() - birthDate.getMonth();
  console.log(month);
  const date = currentDate.getDate() - birthDate.getDate();
  console.log(date);
  if(month < 0 || (month === 0 && date < 0)) year--;
  return year;
}

btnEl.addEventListener('click',calculateAge);