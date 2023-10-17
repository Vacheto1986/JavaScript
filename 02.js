window.addEventListener("load", solve);

function solve() {

  const firstNameRef = document.querySelector('#first-name');
  const lastNameRef = document.querySelector('#last-name');
  const ageRef = document.querySelector('#age');
  const genderRef = document.querySelector('#genderSelect');
  const descriptionRef = document.querySelector('#task');
  const submitBtn = document.querySelector('#form-btn');
  submitBtn.addEventListener('click', addDishInProgress);
  const dishesCounterRef = document.querySelector('#progress-count');
  const inProgressRef = document.querySelector('#in-progress');
  const finishedRef = document.querySelector('#finished');
  let counter = Number(dishesCounterRef.textContent);
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearDish);

  function createDish() {
    const dishEl = document.createElement('li');
    dishEl.className = 'each-line';

    const articleEl = document.createElement('article');
    const h4El = document.createElement('h4');
    const genderAndAgeEl = document.createElement('p');
    const descriptionEl = document.createElement('p');

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Mark as complete';

    editBtn.addEventListener('click', editDish);
    completeBtn.addEventListener('click', completeDish);

    h4El.textContent = `${firstNameRef.value} ${lastNameRef.value}`;
    genderAndAgeEl.textContent = `${genderRef.value}, ${ageRef.value}`;
    descriptionEl.textContent = `Dish description: ${descriptionRef.value}`;

    articleEl.appendChild(h4El);
    articleEl.appendChild(genderAndAgeEl);
    articleEl.appendChild(descriptionEl);
    dishEl.appendChild(articleEl);
    dishEl.appendChild(editBtn);
    dishEl.appendChild(completeBtn);

    return dishEl;

  }

  function clearInputFields() {
    firstNameRef.value = '';
    lastNameRef.value = '';
    ageRef.value = '';
    descriptionRef.value = '';
  }

  function addDishInProgress() {
    const dishEl = createDish();
    if(firstNameRef.value === '' || descriptionRef.value === '' || lastNameRef.value === '' || ageRef.value === '' || genderRef.value === ''){
      return
    }
    inProgressRef.appendChild(dishEl);
    
    clearInputFields();
    counter++;;
    dishesCounterRef.textContent = counter;

  }

  function editDish(event) {
    const editedDish = event.target.parentNode;

    const h4Text = editedDish.querySelector('h4');
    const [firstName, lastName] = h4Text.textContent.split(' ');
    firstNameRef.value = firstName;
    lastNameRef.value = lastName;
    const [gender, age] = editedDish.querySelector('p').textContent.split(', ');
    genderRef.value = gender;
    ageRef.value = age;
    const descrText = editedDish.querySelectorAll('p')[1].textContent.replace('Dish description: ', '')
    // const descArray = editedDish.querySelectorAll('p')[1].textContent.split('Dish description: ');
    // const description = descArray[1];
    descriptionRef.value = descrText;

    const elementToRemove = document.querySelector('.each-line');
    inProgressRef.removeChild(elementToRemove);
    counter--;
    dishesCounterRef.textContent = counter;
  }

  function completeDish(event) {
    counter--;
    dishesCounterRef.textContent = counter;

    const elementToMark = event.target.parentNode;
    const buttons = elementToMark.querySelectorAll('button');
    elementToMark.removeChild(buttons[0]);
    elementToMark.removeChild(buttons[1]);

    finishedRef.appendChild(elementToMark)
  }

  function clearDish(event) {
    // const elToRemove = document.querySelector('#finished').children;
    // finishedRef.remove(elToRemove);
    //   const elToRemove = finishedRef.querySelectorAll('li');

    //   elToRemove.forEach( el => {
    //     finishedRef.removeChild(el);
    // });
    // }
    finishedRef.innerHTML = '';
  }
}