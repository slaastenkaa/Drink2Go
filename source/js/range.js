const slider = document.querySelector('.range__scale');
const valueElementMax = document.querySelector('.range__input-max');
const valueElementMin = document.querySelector('.range__input-min');
const valueElement = [
  valueElementMin,
  valueElementMax
];

slider.classList.remove("range__nojs");

noUiSlider.create(slider, {
  start: [0, 900],
  connect: true,
  step: 10,
  range: {
    'min': 0,
    'max': 1000
  },
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

slider.noUiSlider.on('update', function (values, handle) {
  valueElement[handle].value = values[handle];
});

valueElement.forEach(function (input, handle) {
  input.addEventListener('change', function () {
    slider.noUiSlider.setHandle(handle, this.value);
  });
});
