const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["images/pilt1.jpeg", "images/pilt2.jpeg", "images/pilt3.jpeg", "images/pilt4.jpeg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    image.src = randomImage;
    console.log("Uus pilt:", randomImage);
}