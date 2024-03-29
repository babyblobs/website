const background = document.querySelector('#background')
const base = document.querySelector('#base');
const face = document.querySelector('#face');
const foreground = document.querySelector('#foreground')
const animations = ['animate__rubberBandY', 'animate__rubberBandX', 'animate__rubberBandY', 'animate__bounce'];

let bounceDelay = 7000;
let isPaused = false;
let backgroundHidden = false;
let noAutoBounce = false;
let warp = 1;
let timeoutId;
let ongoingTouches = 0;
const handleClick = () => {
    if (isPaused) return;
    const random = Math.floor(Math.random() * (animations.length - 2));
    if (animations.some(r => base.classList.contains(r))) {
        const currentAnimation = base.classList[1];
        const newAnimationIndex = animations[random] !== currentAnimation ? random : random + 1;
        base.classList.remove(currentAnimation);
        face.classList.remove(currentAnimation);
        animateCSS('#base', animations[newAnimationIndex]);
        animateCSS('#face', animations[newAnimationIndex]);
    } else {
        animateCSS('#base', animations[random]);
        animateCSS('#face', animations[random]);
    }
}

const _togglePause = () => {
    if (isPaused) {
        base.style.animationPlayState = 'running';
        face.style.animationPlayState = 'running';
        isPaused = false;
    } else {
        base.style.animationPlayState = 'paused';
        face.style.animationPlayState = 'paused';
        isPaused = true;
    }
}

const _toggleHide = () => {
    if (backgroundHidden) {
        background.hidden = false;
        if (foreground != null) foreground.hidden = false;
        backgroundHidden = false;
    } else {
        background.hidden = true;
        if (foreground != null) foreground.hidden = true;
        backgroundHidden = true;
    }
}

const _reset = () => {
    base.style.animationPlayState = 'running';
    face.style.animationPlayState = 'running';
    isPaused = false;
    background.hidden = false;
    if (foreground != null) foreground.hidden = false;
    backgroundHidden = false;
    bounceDelay = 7000;
    warp = 1;
    if (noAutoBounce) {
        noAutoBounce = false;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(autoBounce, (Math.floor(Math.random() * bounceDelay + 1600 + bounceDelay / 7)));
    }
}

const handleTouches = (event) => {
    if (event.touches.length == 1) return;
    const fingers = event.touches.length;

    switch (fingers) {
        case 2:
            if (isPaused) return;
            ongoingTouches = 2;
            setTimeout(() => {
                if (ongoingTouches === 2) bounce();
            }, 20);
            break;
        case 3:
            ongoingTouches = 3;
            setTimeout(() => {
                if (ongoingTouches === 3) _togglePause();
            }, 20);
            break;
        case 4:
            ongoingTouches = 4;
            setTimeout(() => {
                if (ongoingTouches === 4) _toggleHide();
            }, 20);
            break;
        case 5:
            ongoingTouches = 0;
            _reset();
    }
}

const handleKeypress = (event) => {
    const keyName = event.key;
    if (keyName === ' ' || keyName.toLowerCase() == 'j') {
        bounce();
    } else if (keyName.toLowerCase() === 'p') {
        _togglePause();
    } else if (keyName.toLowerCase() === 'h') {
        _toggleHide();
    } else if (keyName.toLowerCase() === 'r') {
        _reset();
    } else if (keyName.toLowerCase() === 'b') {
        if (!noAutoBounce) {
            noAutoBounce = true;
        } else {
            noAutoBounce = false;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(autoBounce, (Math.floor(Math.random() * bounceDelay + 1600 + bounceDelay / 7)));
        }
    } else if (keyName.toLowerCase() === 'w') {
        warp *= 0.9;
    } else if (keyName.toLowerCase() === 's') {
        warp *= 1.1;
    } else if (keyName.toLowerCase() === 'a') {
        bounceDelay *= 1.1;
    } else if (keyName.toLowerCase() === 'd') {
        bounceDelay *= 0.9;
    }
}

const moveFace = (event) => {
    if (isPaused) return;
    const centerX = (base.getBoundingClientRect().left + base.getBoundingClientRect().right) / 2;
    const centerY = (base.getBoundingClientRect().top + base.getBoundingClientRect().bottom) / 2;
    const maxChange = base.clientWidth / 2;
    const x = (event.pageX - centerX);
    const y = (event.pageY - centerY);
    const dX = Math.abs(x) > maxChange ? Math.sign(x) * maxChange : x;
    const dY = Math.abs(y) > maxChange ? Math.sign(y) * maxChange : y;
    if (window.innerWidth > window.innerHeight) {
        base.style.marginTop = `${Math.round(dY / (warp * 15))}px`;
        base.style.marginLeft = `${Math.round(dX / (warp * 15))}px`;
        face.style.marginTop = `${Math.round(dY / (warp * 10))}px`;
        face.style.marginLeft = `${Math.round(dX / (warp * 10))}px`;
    } else {
        base.style.marginTop = `${Math.round(dY / (warp * 15))}px`;
        base.style.marginLeft = `${Math.round(dX / (warp * 15))}px`;
        face.style.marginTop = `${Math.round(dY / (warp * 10))}px`;
        face.style.marginLeft = `${Math.round(dX / (warp * 10))}px`;
    }
}

const moveFaceTouch = (event) => {
    if (isPaused || event.touches.length > 1) return;
    const centerX = (base.getBoundingClientRect().left + base.getBoundingClientRect().right) / 2;
    const centerY = (base.getBoundingClientRect().top + base.getBoundingClientRect().bottom) / 2;
    const maxChange = base.clientWidth / 2;
    const x = (event.touches[0].clientX - centerX);
    const y = (event.touches[0].clientY - centerY);
    const dX = Math.abs(x) > maxChange ? Math.sign(x) * maxChange : x;
    const dY = Math.abs(y) > maxChange ? Math.sign(y) * maxChange : y;
    if (window.innerWidth > window.innerHeight) {
        base.style.marginTop = `${Math.round(dY / (warp * 10))}px`;
        base.style.marginLeft = `${Math.round(dX / (warp * 10))}px`;
        face.style.marginTop = `${Math.round(dY / (warp * 7))}px`;
        face.style.marginLeft = `${Math.round(dX / (warp * 7))}px`;
    } else {
        base.style.marginTop = `${Math.round(dY / (warp * 10))}px`;
        base.style.marginLeft = `${Math.round(dX / (warp * 10))}px`;
        face.style.marginTop = `${Math.round(dY / (warp * 7))}px`;
        face.style.marginLeft = `${Math.round(dX / (warp * 7))}px`;
    }
}

const fixFace = () => {
    base.style.margin = 0;
    face.style.margin = 0;
}

const animateCSS = (element, animation) => {
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
    })
}

const bounce = () => {
    animateCSS('#base', 'animate__bounce');
    animateCSS('#face', 'animate__bounce');
    base.classList.add('animate__bounce');
    face.classList.add('animate__bounce');
}

const autoBounce = () => {
    if (noAutoBounce) return;
    if (!animations.some(r => base.classList.contains(r))) {
        bounce();
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(autoBounce, (Math.floor(Math.random() * bounceDelay + 1600 + bounceDelay / 7)));
}

document.addEventListener('click', handleClick);
document.addEventListener('keypress', handleKeypress);
document.addEventListener('touchstart', handleTouches);
document.addEventListener('mousemove', moveFace);
document.addEventListener('touchmove', moveFaceTouch);

screen.orientation.addEventListener('change', fixFace);
window.addEventListener('resize', fixFace);
window.addEventListener('orientationchange', moveFace);

backgroundBounce = true;
timeoutId = setTimeout(autoBounce, (Math.random() * 4000 + 1000));