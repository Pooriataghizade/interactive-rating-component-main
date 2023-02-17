// ----changeTheme=>
const themeSwitcherButton = document.querySelector('#swicher-clr')

themeSwitcherButton.addEventListener('click', function() {
    const body = document.querySelector('body')
  
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode')
  } else {
    body.classList.add('light-mode')
  }
})
// ======/changeTheme.

// ----changeContainer=>
const giveScure = document.querySelector('.dark-space')
const thanx = document.querySelector('.container')
const submit = document.getElementById("submitScore")


submit.addEventListener("click", () =>{
    thanx.classList.remove('hide')
    giveScure.style.display="none";
})
// ========/chNGEContainer.
//---star&score=>
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");


rates.forEach((rate) =>{
  rate.addEventListener('click',() => {
  rating.innerHTML = rate.innerHTML;
  })
})
//====/star&score
