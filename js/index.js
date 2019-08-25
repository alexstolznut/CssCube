
let outerSides = ['cube show-front', 'cube show-right', ' cube show-back', ' cube show-left' ]
const cube = document.querySelector('.cube');
// const sides = document.querySelectorAll('div.cube div');
//     for(let i = 0; i<4; i++) {
//         outerSides.push(sides[i].getAttribute('class'));
//         console.log(outerSides);
//     }

let up = false;
function grabSides(){
    const tempValue = outerSides[0];
    outerSides.shift();
    outerSides.push(tempValue);
    console.log(outerSides);
    return outerSides;
    
}
// let index = 0;
let yDegree = 0;
function frontRightClick() {
    if(up === true){
        zDegree+=90;
        cube.style.transform = 'translatez(-100px) rotateX('+xDegree+'deg) rotateY('+yDegree+'deg) rotateZ(' +zDegree +'deg)';
    } else {
    yDegree -= 90;
    cube.style.transform = 'translatez(-100px) rotateX('+xDegree+'deg) rotateY('+yDegree+'deg) rotateZ(' +zDegree +'deg)';
    }
    
   
//    outerSides[1].removeAttribute('class');
//    outerSides[1].setAttribute('class', outerSides[2].getAttribute('class'));
//    outerSides[2].removeAttribute('class');
//    outerSides[2].setAttribute('class', outerSides[3].getAttribute('class'));
//    outerSides[3].removeAttribute('class');
//    outerSides[3].setAttribute('class', 'cube__face cube__face--front');

}
let xDegree = 0;
let zDegree = 0;
function rotateUp(){
    up = !up;
    xDegree += 90;
    cube.style.transform = 'translatez(-100px) rotateX(' +xDegree+'deg) rotateY('+yDegree+'deg) rotateZ('+zDegree+'deg)';

}
const rotateClockwise = document.getElementById('rotateClockwise');
const rotateUpBtn = document.getElementById('rotateUp');
rotateClockwise.addEventListener('click', frontRightClick);
rotateUpBtn.addEventListener('click', rotateUp);