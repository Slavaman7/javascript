'use strict';


switch (num) {
    case num < 49:
        console.log('Wrong');
        break;
    case num > 100:
        console.log('Over 100');
        break;
    case 50:                       /* if I put case num == 50: instead, there will be "No answer"  */
        console.log('Right');
        break;
    default:
        console.log('No answer');
        break;
}

let num = 50;
/*
while (num < 55) {
    console.log(num);
    num++; [увеличение переменной на 1, выдаст 50, 51, 52, 53, 54]
} */

/* do {
    console.log(num);
    num++;
}
while (num < 55) [увеличение переменной на 1, выдаст 50, 51, 52, 53, 54, как и в предыдущем варианте] */

for (let i = 1; i < 8; i++) {
    console.log(i) /* [выдаст 1, 2, 3, 4, 5, 6, 7] */
}


for (let i = 1; i < 8; i++) {
    if (i == 6) {
        break
    }
console.log(i) /* [выдаст 1, 2, 3, 4, 5] */
}

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
console.log(i) /* [выдаст 1, 2, 3, 4, 5, 7] */
}
