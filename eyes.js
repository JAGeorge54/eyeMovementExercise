let balls = document.getElementsByClassName('ball');
//sets variable for switch
let onOff = 0
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
// gets ahold of eyes and balls
  let eyes = document.querySelectorAll('.eye')
  let balls = document.querySelectorAll('.ball')
      
  if (onOff === 0) {
    // changes color to monster colors
    eyes[0].style.backgroundColor = '#026f2c';
    eyes[1].style.backgroundColor = '#026f2c';
    balls[0].style.backgroundColor = 'red';
    balls[1].style.backgroundColor = 'red';
    //updates variable for switch
    onOff = 1   
  } else {
    //changes colors back to regular colors
    eyes[0].style.backgroundColor = '#ffffff';
    eyes[1].style.backgroundColor = '#ffffff';
    balls[0].style.backgroundColor = '#000';
    balls[1].style.backgroundColor = '#000';
    //updates variable for switch
    onOff = 0   
  }

}
