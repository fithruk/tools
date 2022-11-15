// file path: index.js

// импортируйте все полифилы из папки polyfills
// импортируйте ф-ции sum и mult под такими же именами, а так же ф-цию calc под именем calcExpression из файла calculator/index.js
// импортируйте ф-цию fetchUser из profile/gateway.js под таким же именем
// импортируйте ф-цию printProfile из profile/index.js под таким же именем
import "./polyfills/array-flat.js";
import fetchUser from "./profile/gateway";
import { printProfile } from "./profile";
import calcExpression, { sum, mult } from "./calculator";

const calcResult = calcExpression("1 + 2");
const sumResult = sum(1, 2);
const multResult = mult(1, 2);
const userDataPromise = fetchUser("facebook");
printProfile({ name: "Tom", from: "The World" });

// убедитесь, скрипт выполнился без ошибок
