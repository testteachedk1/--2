const N = "23";

let isNumber = false;
// if (100 < N || N < 0) {
//   console.log("Некорректный балл");
// } else if (90 <= N && N < 100) {
//   console.log("A — , Отлично — продолжай в том же духе");
// } else if (75 <= N && N <= 89) {
//   console.log("B — , Хорошо — есть, куда стремиться");
// } else if (60 <= N && N <= 74) {
//   console.log("C — , Удовлетворительно— подтяни пробелы");
// } else if (40 <= N && N <= 59) {
//   console.log("D — , Плохо — нужно больше практики");
// } else if (0 <= N && N <= 39) {
//   console.log("F — , Нужно серьёзно подтянуться");
// } else if (N === 100) {
//   console.log("(Почти идеал!)");
// }

if (typeof N == "number") {
  isNumber = true;
} else {
  isNumber = false;
  console.log("Введите число корректно");
}

switch (false) {
  case N == 100:
    console.log("Почти идеал");
    break;
  case 90 <= N && N < 100:
    console.log("A — , Отлично — продолжай в том же духе");
    break;
  case 75 <= N && N < 90:
    console.log("B — , Хорошо — есть, куда стремиться");
    break;
  case 60 <= N && N < 75:
    console.log("C — , Удовлетворительно— подтяни пробелы");
    break;
  case 40 <= N && N < 60:
    console.log("D — , Плохо — нужно больше практики");
    break;
  case 0 <= N && N < 40:
    console.log("F — , Нужно серьёзно подтянуться");
    break;
  default:
    console.log("Некорректный балл");
    break;
}
switch (N) {
  case 21:
    console.log("21 балл");
    break;
}

// стартовое слово: switch (либо значение переменной, либо true)

if (N == 21) {
  console.log("21 балл");
}

let isLogin = true;

const swictherAuth = document.querySelector(".swicther");

swictherAuth.addEventListener("click", function () {
  isLogin = false;
  if (!isLogin) {
    swictherAuth.classList.add("register");
  } else {
    swictherAuth.classList.remove("register");
  }
});
