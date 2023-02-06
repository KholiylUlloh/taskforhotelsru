// Zadacha 1 / 5 minut

// function Stingify (arr){
//     arr = [...arr.splice(0, arr.length -1), arr[arr.length-1] + '.']
//     console.log(arr.toString());
// }

// Stingify(["Москва", "Санкт-Петербург", "Воронеж"])

// Zadacha 2 / 10 minut

function roundUp(floatNum) {
  if (floatNum % 5 <= 2.5) {
    floatNum = Math.floor(floatNum / 5);
    return (floatNum *= 5);
  } else if (floatNum % 5 >= 2.5) {
    floatNum = Math.ceil(floatNum / 5);
    return (floatNum *= 5);
  }
}

console.log(roundUp(41.7));

// Zadacha 3 / 5 minut

function addCount(int) {
  let isMoreThanTwen = int > 20;
  if (isMoreThanTwen) {
    const lastDigit1Str = String(int).slice(-1);
    const lastDigit1Num = Number(lastDigit1Str);
    if (lastDigit1Num === 1) {
      return `${int} компьютер`;
    } else if (lastDigit1Num > 1 && lastDigit1Num < 5) {
      return `${int} компьютерa`;
    } else if (lastDigit1Num >= 5) {
      return `${int} компьютеров`;
    }
  } else if (!isMoreThanTwen) {
    if (int <= 20 && int >= 5) {
      return `${int} компьютеров`;
    } else if (int < 5 && int > 1) {
      return `${int} компьютерa`;
    } else {
      return `${int} компьютер`;
    }
  }
}

console.log(addCount(1981));

// // Zadacha 4 / 5 minut

function checkNumber(num) {
  if (num % 2 !== 0) {
    return `${num} является простым`;
  }
  return `${num} не является простым`;
}

console.log(checkNumber(5));

// // Zadacha 5 / 5 minut

function twinNums(arr1, arr2) {
  return arr1.filter((i) => arr2.includes(i));
}

// Zadacha 6 / 15 minut

function drawTable() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let arr = [i];
    for (let j = 1; j <= n; j++) {
      arr.push(j * i);
    }
    console.log(arr.toString().replace(/,/gi, " "));
  }
}
drawTable();
