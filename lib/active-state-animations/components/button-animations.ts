export const IconButtonAnimation = () => {
  const buttonArray = document.getElementsByClassName('icon-up-anim');

  if (buttonArray && buttonArray.length > 0) {
    const element = buttonArray[0];
    const iconWrapperElement = element.querySelector('.icon-wrapper');
    const svgElement = element.querySelector('svg');
    const duplicateElement = svgElement?.cloneNode(true);

    if (duplicateElement) {
      iconWrapperElement?.appendChild(duplicateElement);
    }
  }
};
