const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};

function changeColor() {
  eyeType1 = eye1.classList.contains('eye')
  eyeType2 = eye1.classList.contains('eye')
  eye1 = document.getElementById('eye1')
  eye2 = document.getElementById('eye2')
  if (eyeType1 & eyeType2) {
      eye1.classList.remove('eye');
      eye1.classList.add('monster-eye')
      eye2.classList.remove('eye');
      eye2.classList.add('monster-eye')
  } else {
    eye1.classList.remove('monster-eye');
      eye1.classList.add('eye')
      eye2.classList.remove('monster-eye');
      eye2.classList.add('eye')
  }
}