// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}
// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function ($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = 'visible';
    } else {
      $mushroom.style.visibility = 'hidden';
    }
  });
}
// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function (gp) {
    if (state.greenPeppers) {
      gp.style.visibility = 'visible';
    } else {
      gp.style.visibility = 'hidden';
    }
  });
}
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  const whiteSauceOption = document.querySelector('.sauce');
  if (state.whiteSauce) {
    whiteSauceOption.classList.add('sauce-white');
  } else {
    whiteSauceOption.classList.remove('sauce-white');
  }
}
// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  const glutenFreeOption = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    glutenFreeOption.classList.add('crust-gluten-free');
  } else {
    glutenFreeOption.classList.remove('crust-gluten-free');
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  const changePepperoni = document.querySelector('.btn-pepperonni');
  const changeMushrooms = document.querySelector('.btn-mushrooms');
  const changeGreenPeppers = document.querySelector('.btn-green-peppers');
  const changeWhiteSauce = document.querySelector('.btn-sauce');
  const changeGlutenFree = document.querySelector('.btn-crust');
  if (!state.pepperonni) {
    changePepperoni.classList.remove('active');
  } else {
    changePepperoni.classList.add('active');
  }
  if (!state.mushrooms) {
    changeMushrooms.classList.remove('active');
  } else {
    changeMushrooms.classList.add('active');
  }
  if (!state.greenPeppers) {
    changeGreenPeppers.classList.remove('active');
  } else {
    changeGreenPeppers.classList.add('active');
  }
  if (state.whiteSauce) {
    changeWhiteSauce.classList.add('active');
  } else {
    changeWhiteSauce.classList.remove('active');
  }
  if (state.glutenFreeCrust) {
    changeGlutenFree.classList.add('active');
  } else {
    changeGlutenFree.classList.remove('active');
  }
}
// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  let totalPrice = basePrice;
  document.querySelector('aside ul').innerHTML = '';
  if (state.pepperonni) {
    document.querySelector(
      'aside ul'
    ).innerHTML += `<li> Peperoni $${ingredients.pepperonni.price}</li>`;
    totalPrice += ingredients.pepperonni.price;
  }

  if (state.mushrooms) {
    document.querySelector(
      'aside ul'
    ).innerHTML += `<li> Mushrooms $${ingredients.mushrooms.price}</li>`;
    totalPrice += ingredients.mushrooms.price;
  }

  if (state.greenPeppers) {
    document.querySelector(
      'aside ul'
    ).innerHTML += `<li> Green Peppers $${ingredients.greenPeppers.price}</li>`;
    totalPrice += ingredients.greenPeppers.price;
  }

  if (state.whiteSauce) {
    document.querySelector(
      'aside ul'
    ).innerHTML += `<li> White Sauce $${ingredients.whiteSauce.price}</li>`;
    totalPrice += ingredients.whiteSauce.price;
  }

  if (state.glutenFreeCrust) {
    document.querySelector(
      'aside ul'
    ).innerHTML += `<li> Gluten Free Cruste $${ingredients.glutenFreeCrust.price}</li>`;
    totalPrice += ingredients.glutenFreeCrust.price;
  }
  document.querySelector('aside strong').innerHTML = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
