const blob = document.querySelector('#blob');
const animations = ['animate__rubberBandY', 'animate__rubberBandX', 'animate__rubberBandY', 'animate__bounce'];

blob.addEventListener('click', () => {
  const random = Math.floor(Math.random() * (animations.length - 2));
  if (animations.some(r => blob.classList.contains(r))) {
    const currentAnimation = blob.classList[1];
    const newAnimationIndex = animations[random] !== currentAnimation ? random : random + 1;
    blob.classList.remove(currentAnimation);
    animateCSS('#blob', animations[newAnimationIndex]);
  } else {
    animateCSS('#blob', animations[random]);
  }
});

function autoBounce() {
  if (!animations.some(r => blob.classList.contains(r))) {
    animateCSS('#blob', 'animate__bounce');
    blob.classList.add('animate__bounce');
  }
  setTimeout(autoBounce, (Math.floor(Math.random() * (5001) + 3000)));
}
setTimeout(autoBounce, (Math.random() * 3000 + 1000));

const animateCSS = (element, animation) =>
  new Promise((resolve, reject) => {
    const node = document.querySelector(element);

    node.classList.add(animation);
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(animation);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {
      once: true
    });
  });