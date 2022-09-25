// Поймаем клик на ссылку вход
// <script>
// var link = document.querySelector(".login");
// link.addEventListener("click", function(event) {
// event.preventDefault();
// console.log("Клик по ссылке вход");
// });
// </script>


// Покажем модальное окно
// <script>
// var popup = document.querySelector(".modal-content");
// popup.classList.add("modal-content-show");
// </script>


// Соединяем скрипт вместе
// <script>
// var link = document.querySelector(".login");
// var popup = document.querySelector(".modal-content");
// link.addEventListener("click", function(event) {
// event.preventDefault();
// popup.classList.add("modal-content-show");
// });
// </script>


// закрыть модальное окно
// <script>
// var close = document.querySelector(".modal-content-close");
// close.addEventListener("click", function(event) {
// event.preventDefault();
// popup.classList.remove("modal-content-show");
// });
// </script>


// Промежуточный итог #1
// <script>
// var link = document.querySelector(".login");
// var popup = document.querySelector(".modal-content");
// var close = document.querySelector(".modal-content-close");
// link.addEventListener("click", function(event) {
// event.preventDefault();
// popup.classList.add("modal-content-show");
// });
// close.addEventListener("click", function(event) {
// event.preventDefault();
// popup.classList.remove("modal-content-show");
// });
// </script>

// Фокус на поле ввода
// <script>
// var link = document.querySelector(".login");
// var popup = document.querySelector(".modal-content");
// var close = document.querySelector(".modal-content-close");
// var login = popup.querySelector("[name=login]");
// link.addEventListener("click", function(event) {
// event.preventDefault();
// popup.classList.add("modal-content-show");
// login.focus();
// });
// close.addEventListener("click", function(event) {
// event.preventDefault();
// popup.classList.remove("modal-content-show");
// });
// </script>


// Проверим форму на заполнение
// <script>
// var popup = document.querySelector(".modal-content");
// var form = popup.querySelector("form");
// var login = popup.querySelector("[name=login]");
// var password = popup.querySelector("[name=password]");
// form.addEventListener("submit", function(event) {
// if (!login.value || !password.value) {
// event.preventDefault();
// console.log("Нужно ввести логин и пароль");
// }
// });
// </script>


// Промежуточный итог #2
// <script>
// var link = document.querySelector(".login");
// var popup = document.querySelector(".modal-content");
// var close = popup.querySelector(".modal-content-close");
// var form = popup.querySelector("form");
// var login = popup.querySelector("[name=login]");
// var password = popup.querySelector("[name=password]");
// link.addEventListener("click", function(event) {
// event.preventDefault();
// popup.classList.add("modal-content-show");
// login.focus();
// });
// close.addEventListener("click", function(event) {
// event.preventDefault();
// popup.classList.remove("modal-content-show");
// });
// form.addEventListener("submit", function(event) {
// if (!login.value || !password.value) {
// event.preventDefault();
// console.log("Нужно ввести логин и пароль");
// }
// });
// </script>


// Запомним логин
// <script>
// form.addEventListener("submit", function(event) {
// if (!login.value || !password.value) {
// event.preventDefault();
// console.log("Нужно ввести логин и пароль");
// } else {
// localStorage.setItem("login", login.value);
// }
// });
// </script>


// Сместим фокус на пароль
// <script>
// var popup = document.querySelector(".modal-content");
// var form = popup.querySelector("form");
// var login = popup.querySelector("[name=login]");
// var password = popup.querySelector("[name=password]");
// var storage = localStorage.getItem("login");
// link.addEventListener("click", function(event) {
// event.preventDefault();
// popup.classList.add("modal-content-show");
// if (storage) {
// login.value = storage;
// password.focus();
// } else {
// login.focus();
// }
// });
// </script>


// Закроем модальное окно по ESC
// <script>
// window.addEventListener("keydown", function(event) {
// if (event.keyCode === 27) {
// if (popup.classList.contains("modal-content-show")) {
// popup.classList.remove("modal-content-show");
// }
// }
// });
// </script>


// Промежуточный итог #3
// <script>
// var link = document.querySelector(".login");
// var popup = document.querySelector(".modal-content");
// var close = popup.querySelector(".modal-content-close");
// var form = popup.querySelector("form");
// var login = popup.querySelector("[name=login]");
// var password = popup.querySelector("[name=password]");
// var storage = localStorage.getItem("login");
// link.addEventListener("click", function(event) {
// event.preventDefault();
// popup.classList.add("modal-content-show");
// if (storage) {
// login.value = storage;
// password.focus();
// } else {
// login.focus();
// }
// });
// close.addEventListener("click", function(event) {
// event.preventDefault();
// popup.classList.remove("modal-content-show");
// });
// form.addEventListener("submit", function(event) {
// if (!login.value || !password.value) {
// event.preventDefault();
// console.log("Нужно ввести логин и пароль");
// } else {
// localStorage.setItem("login", login.value);
// }
// });
// window.addEventListener("keydown", function(event) {
// if (event.keyCode === 27) {
// if (popup.classList.contains("modal-content-show")) {
// popup.classList.remove("modal-content-show");
// }
// }
// });
// </script>


// Плавно спустим форму(CSS)
// !!!
// <style>
// @keyframes bounce {
// 0% { transform: translateY(-2000px); }
// 70% { transform: translateY(30px); }
// 90% { transform: translateY(-10px); }
// 100% { transform: translateY(0); }
// }
// .modal-content-show {
// display: block;
// animation: bounce 0.6s;
// }
// </style>
// !!!


// Потрясём форму(CSS неправильно ввел логин или пароль)
// !!!
// <style>
// @keyframes shake {
// 0%, 100% { transform: translateX(0); }
// 10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
// 20%, 40%, 60%, 80% { transform: translateX(10px); }
// }
// .modal-error {
// animation: shake 0.6s;
// }
// </style>
// !!!


// Потрясём форму(JS неправильно ввел логин или пароль)
// <script>
// close.addEventListener("click", function(event) {
// event.preventDefault();
// popup.classList.remove("modal-content-show");
// popup.classList.remove("modal-error");
// });
// form.addEventListener("submit", function(event) {
// if (!login.value || !password.value) {
// event.preventDefault();
// popup.classList.add("modal-error");
// } else {
// localStorage.setItem("login", login.value);
// }
// });
// </script>


// Скрипт готов
var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
        }
    }
});

// Откроем модальное окно карты
var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
        }
    }
});
