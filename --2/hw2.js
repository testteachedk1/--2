const P = 400; //цена билета в рублях (изначальная цена)
const age = 5; //возраст покупателя билета
const isWeekdayPromo = false; //будний или не будний день

let finalPrice = 0; //финальная цена

if (0 < age && age <= 6) {
  finalPrice = 100;
  console.log(finalPrice, "р. — Бесплатно (ребёнок до 6 лет)");
} else if (6 < age && age <= 17) {
  finalPrice = P * 0.5;
  console.log(finalPrice, "р. — Скидка 50% детский тариф");
} else if (18 < age && age < 59 && isWeekdayPromo == true) {
  finalPrice = P - P * 0.2;
  console.log(finalPrice, "р. - Скидка 20% промо в будний день");
} else if (18 < age && age < 59 && isWeekdayPromo == false) {
  finalPrice = P;
  console.log(finalPrice, "р. - Скидки отсутствуют");
} else if (60 < age) {
  finalPrice = P - P * 0.3;
  console.log(finalPrice, "р. - Cкидка 30%");
}
console.log(finalPrice, "р. — Бесплатно (ребёнок до 6 лет)");
