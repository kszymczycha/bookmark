let stepTime: any = null;

const decrementCounter = (
  selector: string,
  current: number,
  target: number,
  duration: number
): void => {
  let counter = document.querySelector(selector);
  if (stepTime === null) {
    stepTime = Math.abs(Math.floor(duration / current));
  }

  if (current > target && counter) {
    current -= 10;
    counter.innerHTML = current.toLocaleString();
    setTimeout(
      () => decrementCounter(selector, current, target, duration),
      stepTime
    );
  }
};

export { decrementCounter };
