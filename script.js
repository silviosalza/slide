//creare slides dinamicamente

const imagesArray = ["./img/Hideo-Kojima-Konami-Pixel-Art-Xtreme-Retro.png" , "./img/2447.jpg"]

const itemsContainer = document.querySelector(".slider-items");

for (let i = 0; i < imagesArray.length ; i++){
    const currentImages = imagesArray[i];

    const sliderItem = `<div class="item">
    <img src="${currentImages}" alt=""></div>`;

    itemsContainer.innerHTML = sliderItem;
}


//stato di partenza
const items = document.getElementsByClassName("item");
let activeItemIndex = 0; 

itemsArray[0].classList.add("active");
