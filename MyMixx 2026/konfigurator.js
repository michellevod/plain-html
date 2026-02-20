const form = document.querySelector('form.cart__Inner__Container');
const popover = document.getElementById('checkout__Success');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  popover.showPopover(); // natives Popover-API
});


popover.querySelector('.checkout__Btn .btn-secondary').addEventListener('click', () => {
  popover.hidePopover();
});

