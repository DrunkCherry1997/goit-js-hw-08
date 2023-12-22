const images = [
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
      description: "Hokkaido Flower",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
      description: "Container Haulage Freight",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
      description: "Aerial Beach View",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
      description: "Flower Blooms",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
      description: "Alpine Mountains",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
      description: "Mountain Lake Sailing",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      description: "Alpine Spring Meadows",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      description: "Nature Landscape",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      description: "Lighthouse Coast Sea",
    },
];
  
// Отримуємо доступ до елемента з класом "gallery" у DOM-структурі
const galleryContainer = document.querySelector(".gallery");

// Створюємо HTML-розмітку для кожного елемента галереї
const galleryMarkup = images
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item">
         <a class="gallery-link" href="${original}">
           <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" />
         </a>
       </li>`
  )
  .join("");

// Вставляємо розмітку в кінець контейнера галереї
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

// Додаємо прослуховувач подій кліку на контейнер галереї
galleryContainer.addEventListener("click", handleGalleryClick);

// Функція, що викликається при кліку на елемент галереї
function handleGalleryClick(event) {
  // Відміняємо стандартну поведінку посилань
  event.preventDefault();

  // Перевіряємо, чи клікнуто саме по зображенню
  if (event.target.nodeName !== "IMG") {
    return;
  }

  // Отримуємо URL великого зображення з датасету елемента
  const largeImageURL = event.target.dataset.source;

  // Створюємо екземпляр модального вікна з великим зображенням
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" class="largeImage" width="800" height="600">
  `);
    


  // Показуємо модальне вікно
  instance.show();
}

// Додаємо прослуховувач події клавіші Escape для закриття модального вікна
document.addEventListener("keydown", (event) => {
  // Отримуємо існуючий екземпляр модального вікна
  const instance = basicLightbox.getInstance();

  // Перевіряємо, чи натискана клавіша Escape та чи модальне вікно видиме
  if (event.key === "Escape" && instance.visible()) {
    // Закриваємо модальне вікно
    instance.close();
  }
});


// const galleryList = document.querySelector('.gallery');

//   function createGallery(imagesArray) {
//     const galleryItems = imagesArray.map(image => {
//       const listItem = document.createElement('li');
//       listItem.classList.add('gallery-item');
//       const link = document.createElement('a');
//       link.classList.add('gallery-link');
//       link.href = image.original;
//       const imageElement = document.createElement('img');
//       imageElement.classList.add('gallery-image');
//       imageElement.src = image.preview;
//       imageElement.alt = image.description;
//       imageElement.dataset.source = image.original;
//       link.appendChild(imageElement);
//       listItem.appendChild(link);
//       return listItem;
//     });
//     galleryList.append(...galleryItems);
//   }

//   createGallery(images);
// galleryList.addEventListener('click', onGalleryItemClick);

// function onGalleryItemClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

//   const largeImageURL = event.target.dataset.source;
//   const largeAlt = event.target.alt;

//   const instance = basicLightbox.create(`<img src="${largeImageURL}" class="largeImage" alt="${largeAlt}">`, {
//     onShow: (instance) => {

//       const onKeyUp = (event) => {
//         if (event.code === 'Escape') {
//           instance.close();
//         }
//       };

//       window.addEventListener('keyup', onKeyUp);
//       instance.__onKeyUp = onKeyUp;
//     },
//     onClose: (instance) => {

//       window.removeEventListener('keyup', instance.__onKeyUp);
//     }
    
//   });

//   instance.show();
// }