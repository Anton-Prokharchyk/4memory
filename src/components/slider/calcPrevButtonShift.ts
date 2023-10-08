const calcPrevScrollShift = (element: HTMLElement): number => {
  const { clientWidth: shiftStep } = element;
  const currentShift: number = Number(
    element.style.left.substring(0, element.style.left.indexOf('px')) ||
      element.style.left
  );
  const maxShift: number = 0;
  const nextShift = currentShift + shiftStep;
  return nextShift >= maxShift ? maxShift : nextShift;
};

export default calcPrevScrollShift;
