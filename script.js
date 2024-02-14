/* Function to change color by using onmousemove it means by hover */


let para = document.querySelector('.para');

para.onmousemove = () => {
    para.style.backgroundColor = 'red';
}


// Function to leave mouse change color to default

para.onmouseleave = () => {
    para.style.backgroundColor = 'transparent'
}


// Function to Move Pic with mouse

// let img = document.querySelector('.img');

// document.onmousemove = (e) => {
//     img.style.position = 'fixed';
//     img.style.top = `${e.clientY}px`;
//     img.style.left = `${e.clientX}px`;
// } 
  
// Function to bigger in size in click

let img1 = document.querySelector('.img1');

img1.onclick = () =>{
    img1.style.height = '500px';
    img1.style.width = '500px';
    img1.style.transition = '2s'
}

// Function to click to change Position


let img2 = document.querySelector('.img2');

img2.onclick = () =>{
    img2.style.position = 'fixed';
    img2.style.top = '500px';
    img2.style.left = '500px';
    img2.style.transition = '2s'
}
