const selectControl = document.querySelector('.select__control-div');
const select = document.querySelector('.select');
const selectTitle = selectControl.querySelector('.select__control-title');
const selectLabels = selectControl.querySelectorAll('.select__control-label');

select.classList.remove("select-nojs");

selectTitle.addEventListener('click', () => {
  if ('active' === selectControl.getAttribute('data-state')) {
    selectControl.setAttribute('data-state', '');
  } else {
    selectControl.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectLabels.length; i++) {
  selectLabels[i].addEventListener('click', (event) => {
    selectTitle.textContent = event.target.textContent;
    selectControl.setAttribute('data-state', '');
  });
}
