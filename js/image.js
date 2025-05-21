const imgElement = document.querySelector(".img");
const images = [
    "photo/tvy1.jpg",
    "photo/tvy2.jpg",
    "photo/tvy4.jpg"
];
let current = 0;

setInterval(() => {
    imgElement.style.opacity = 0;

    setTimeout(() => {
            current = (current + 1) % images.length;
            imgElement.src = images[current];
            imgElement.style.opacity = 1;
        }, 500);
}, 4000);