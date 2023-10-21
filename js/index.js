// const backdropElement = document.getElementById('JS_BACKDROP');
// console.log(backdropElement);
// const classBackdropOpen = 'is-hidden';
// const handleBackdropToggle = () => {
//   backdropElement?.classList.toggle(classBackdropOpen);
// };
// window.testBackdrop = handleBackdropToggle;
// const openBackdropElement = document.getElementById('JS_OPEN_BACKDROP');
// const closeBackdropElement = document.getElementById('JS_CLOSE_BACKDROP');
// if (openBackdropElement) {
//   openBackdropElement.onclick = handleBackdropToggle;
// }
// if (closeBackdropElement) {
//   closeBackdropElement.onclick = handleBackdropToggle;
// }
const makeToggle = ({
  toggleClass,
  rootElementId,
  openElementId,
  closeElementId,
}) => {
  const backdropElement = document.getElementById(rootElementId);

  const handleBackdropToggle = () => {
    backdropElement?.classList.toggle(toggleClass);
  };

  const openBackdropElement = document.getElementById(openElementId);

  const closeBackdropElement = document.getElementById(closeElementId);

  if (openBackdropElement) {
    openBackdropElement.onclick = handleBackdropToggle;
  }

  if (closeBackdropElement) {
    closeBackdropElement.onclick = handleBackdropToggle;
  }
};

makeToggle({
  toggleClass: 'is-open',
  rootElementId: 'JS_BACKDROP',
  openElementId: 'JS_OPEN_BACKDROP',
  closeElementId: 'JS_CLOSE_BACKDROP',
});

makeToggle({
  toggleClass: 'is-open',
  rootElementId: 'JS_MOB_MENU',
  openElementId: 'JS_OPEN_MOB_MENU',
  closeElementId: 'JS_CLOSE_MOB_MENU',
});
