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

// Створюємо HTML-розмітку для кожного елемента галереї. Використовуючи метод map, створюється масив рядків HTML для кожного елемента галереї.
// Потім метод join об'єднує ці рядки в один рядок, щоб отримати готову HTML-розмітку.
// Вираз { preview, original, description } використовує деструктивне присвоювання об'єкта в JavaScript. Це коротший синтаксис для отримання значень властивостей об'єкта.
// Метод.map() використовується для створення нового масиву на основі вихідного масиву images.У цьому випадку для кожного об'єкта в масиві images (який містить властивості 
// preview, original, та description), створюється рядок HTML, представляючи один елемент галереї.
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

// Вставляємо розмітку в кінець контейнера галереї. .insertAdjacentHTML("beforeend", galleryMarkup): Це метод, який дозволяє вставити HTML-рядок 
// в зазначене місце відносно елемента galleryContainer.Параметри методу:
// "beforeend": Це розміщення, вказане як рядок, що вказує, що HTML - рядок буде вставлений перед закриваючим тегом </div > (або будь - яким іншим закриваючим тегом) контейнера.
//  Іншими словами, рядок буде вставлено в кінець вмісту контейнера.
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

// Додаємо прослуховувач подій кліку на контейнер галереї
galleryContainer.addEventListener("click", handleGalleryClick);

// Функція, що викликається при кліку на елемент галереї
function handleGalleryClick(event) {
  // Відміняємо стандартну поведінку посилань
  event.preventDefault();

  // Перевіряємо, чи клікнуто саме по зображенню.event.target: Це властивість події, яка містить елемент, на якому виникла подія. У контексті обробника подій 
//   це буде елемент, на якому відбулося подія кліку.
// .nodeName: Це властивість DOM-елемента, яка повертає ім'я вузла в верхньому регістрі. Наприклад, "DIV" або "IMG".
// "IMG": Це рядок, який ми порівнюємо з ім'ям вузла nodeName. У цьому випадку ми перевіряємо, чи елемент, на якому відбулося подія кліку, є зображенням (<img>).
  if (event.target.nodeName !== "IMG") {
    return;
  }

  // Отримуємо URL великого зображення з датасету елемента .Код const largeImageURL = event.target.dataset.source; використовує властивість dataset 
//   для отримання значення атрибута data - source елемента, на якому відбулося подія(наприклад, клік).
// Розберемо кожну частину цього виразу:
// event.target: Це елемент DOM, на якому спрацював обробник події. У даному випадку, це елемент, на який був здійснений клік.
// .dataset: Це властивість, яка містить всі атрибути data-* елемента як об'єкт. Вираз event.target.dataset повертає об'єкт, який представляє всі атрибути data-* поточного елемента.
// .source: Це частина dataset, яка вказує на атрибут data-source. Таким чином, event.target.dataset.source повертає значення атрибута data-source елемента, на якому відбулася подія.
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
  // Отримуємо існуючий екземпляр модального вікна.
// basicLightbox.getInstance() використовується для отримання існуючого екземпляра модального вікна, створеного бібліотекою basicLightbox. Давайте розберемо, що тут відбувається:
// basicLightbox: Це об'єкт або модуль, який надає функціонал для створення модальних вікон. В даному випадку, це бібліотека basicLightbox.
// getInstance(): Це метод, який повертає існуючий екземпляр модального вікна, якщо він вже створений. Якщо модальне вікно ще не було створено, повертається null.
  const instance = basicLightbox.getInstance();

  // Перевіряємо, чи натискана клавіша Escape та чи модальне вікно видиме
  if (event.key === "Escape" && instance.visible()) {
    // Закриваємо модальне вікно
    instance.close();
  }
});













const galleryList = document.querySelector('.gallery');
function createGallery(imagesArray) {
    // Створюємо масив елементів галереї на основі масиву об'єктів imagesArray
const galleryItems = imagesArray.map(image => {
    // Створюємо новий <li> елемент для кожного зображення
    const listItem = document.createElement('li');
    // Додаємо клас 'gallery-item' до <li> елемента
    listItem.classList.add('gallery-item');
    // Створюємо новий <a> елемент для зображення
    const link = document.createElement('a');
    // Додаємо клас 'gallery-link' до <a> елемента
    link.classList.add('gallery-link');

    // Встановлюємо атрибут href <a> елемента на URL великого зображення. У цьому рядку встановлюється значення атрибуту href для створеного елемента <a>. 
//     Значення атрибуту href встановлюється на URL великого зображення, яке береться з властивості original об'єкта image.
// Коли користувач клікає на маленьке зображення в галереї, посилання < a > буде відкривати велике зображення за вказаним URL. 
// Такий підхід забезпечує можливість перегляду великого зображення, атрибут href якого встановлено на image.original.
    link.href = image.original;


    // Створюємо новий <img> елемент для маленького зображення
    const imageElement = document.createElement('img');
    // Додаємо клас 'gallery-image' до <img> елемента
    imageElement.classList.add('gallery-image');


    // Встановлюємо атрибут src <img> елемента на URL маленького зображення.
//     У цьому рядку встановлюється значення атрибуту src для створеного елемента < img >. 
//     Значення атрибуту src встановлюється на URL маленького(попередньо перегляду) зображення, яке береться з 
//     властивості preview об'єкта image.
//    Це поле src задає зображення, яке відображатиметься у галереї. 
//    Коли сторінка завантажується, браузер використовує значення цього атрибуту, щоб визначити, яке зображення відображати.
//    Таким чином, коли користувач клікає на маленьке зображення, це велике(попередньо перегляду) зображення буде показано у галереї.
    imageElement.src = image.preview;



    // Встановлюємо атрибут alt <img> елемента на текстовий опис зображення.
    // У цьому рядку встановлюється значення атрибуту alt для елемента < img >. 
    // Значення атрибуту alt встановлюється на текстовий опис зображення, який береться з властивості description об'єкта image.
    imageElement.alt = image.description;



    // Встановлюємо атрибут dataset.source <img> елемента на URL великого зображення.
    // У цьому рядку встановлюється значення користувацького даних(data attribute) source для елемента < img >. 
    // Значення цього атрибуту береться з властивості original об'єкта image.
    // Використання dataset утворює атрибут data - source для елемента < img >. 
    // Це може бути корисно, оскільки розширюється можливість зберігати додаткові дані пов'язані із зображенням, 
    // які можна використовувати у подальших операціях або взаємодії з JavaScript.
    imageElement.dataset.source = image.original;



    // Додаємо <img> елемент до <a> елемента
//     appendChild - це метод в об'єкті Node у JavaScript, який використовується
//  для додавання нового дочірнього вузла в кінець списку дочірніх вузлів вже існуючого батьківського вузла.
//  Він додає переданий вузол як останній дочірній вузол в списку.
    link.appendChild(imageElement);


    // Додаємо <a> елемент до <li> елемента
    listItem.appendChild(link);
    // Повертаємо готовий <li> елемент для поточного зображення
    return listItem;
});

    // Додаємо створені елементи галереї до списку .gallery
    galleryList.append(...galleryItems);
}
// Викликаємо функцію createGallery з масивом зображень
createGallery(images);
galleryList.addEventListener('click', onGalleryItemClick);
function onGalleryItemClick(event) {
    event.preventDefault(); // Відмінюємо стандартну поведінку посилань

    if (event.target.nodeName !== 'IMG') {
        return; // Перевіряємо, чи клікнуто саме по зображенню
    }

    const largeImageURL = event.target.dataset.source; // Отримуємо URL великого зображення з датасету елемента
//   target: Це властивість об'єкта події event, яка містить посилання на елемент, який є цільовим для події (у цьому випадку, елемент, на який клікнули).
//     dataset: Це властивість об'єкта target, яка містить всі атрибути data-* елемента. У нашому випадку, data-source є атрибутом елемента, який ми використовуємо 
//  для зберігання URL великого зображення.
// source: Це атрибут data-source, який ми використовуємо для зберігання URL великого зображення. Це значення присвоюється змінній largeImageURL.



    const largeAlt = event.target.alt; // Отримуємо альтернативний текст великого зображення

    // Створюємо екземпляр модального вікна basicLightbox з великим зображенням та деякими опціями
    const instance = basicLightbox.create(
        `<img src="${largeImageURL}" class="largeImage" alt="${largeAlt}">`,
        {
            onShow: (instance) => {
                // Додаємо прослуховувач події натискання клавіші "Escape" під час показу вікна.
                // onShow: (instance) => {...}: Обробник події, який викликається при відображенні модального вікна. 
                // У цьому обробнику додається прослуховувач події натискання клавіші "Escape" - onKeyUp. Ви можете визначити обробники подій іншим способом, наприклад, як окремі функції,
                //  передавані як параметри при створенні екземпляра: function onShow(instance)
                const onKeyUp = (event) => {

                    // event.code: Це властивість об'єкта події, яка містить код клавіші, що була натискана або відпущена. У випадку клавіші Escape це 'Escape'.
                    if (event.code === 'Escape') {
                        instance.close();
                    }
                };
        //         window.addEventListener('keyup', onKeyUp);: Додає прослуховувач події натискання клавіші "Escape" до глобального об'єкта window. 
        // Це означає, що коли користувач натискає клавішу "Escape", буде викликана функція onKeyUp.
                window.addEventListener('keyup', onKeyUp);

                instance.__onKeyUp = onKeyUp; // Зберігаємо посилання на прослуховувач для подальшого видалення.Цей рядок створює властивість __onKeyUp на об'єкті instance
        //         (який є екземпляром модального вікна).Значенням цієї властивості є функція onKeyUp.Це може бути використано для зберігання посилання на функцію обробника події,
        // щоб можна було звертатися до неї в майбутньому. 
// Використання подвійного підкреслення(double underscore) перед іменем змінної, такої як __onKeyUp, в багатьох випадках вказує на те, що це є ім'я для "приватної" змінної. 
// Однак,  в JavaScript фактично не існує "приватних" змінних чи методів у звичайному сенсі, як у багатьох інших мов програмування.
// В даному випадку, використання подвійного підкреслення може бути просто конвенцією коду, що позначає, що це є внутрішньою змінною, 
// яка повинна використовуватися тільки всередині об'єкта або модуля.
//  Такий підхід може допомогти із зменшенням ймовірності конфліктів імен з іншими частинами програми.
            },


            // Обробник події, який викликається при закритті модального вікна. У цьому обробнику видаляється прослуховувач події натискання клавіші "Escape".
            onClose: (instance) => {
                // Видаляємо прослуховувач події натискання клавіші "Escape" при закритті вікна
                window.removeEventListener('keyup', instance.__onKeyUp);  
                // Цей рядок коду викликає метод removeEventListener для window, щоб видалити прослуховувач подій
                // клавіатури(keyup).Перший аргумент методу - це тип події, яку ви хочете видалити.Другий аргумент - це функція - обробник, яка була встановлена як прослуховувач раніше.
                //     instance.__onKeyUp: Це властивість __onKeyUp об'єкта instance. Раніше, при відкритті модального вікна, був встановлений прослуховувач клавіші "Escape" (onKeyUp).
                //      Посилання на цю функцію зберігається властивістю __onKeyUp для того, щоб його можна було використовувати при подальших операціях.
            }
        }
    );

    instance.show(); // Показуємо модальне вікно
}
