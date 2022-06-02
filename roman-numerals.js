
export const toRoman = (n) => {

  let numArr = n.toString().split("").map(num => Number(num));

  const numerals = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX"
  }

  const result = [];

  const determine = function(arr, length) {

    if (arr[0] === 0) {
      arr.shift();
      return;
    }

    if (length === 1) {
      result.push(numerals[arr[0]]);
    }

    if (length === 2) {
      if (arr[0] <= 8) {
        result.push(numerals[arr[0]].replaceAll("I", "X").replaceAll("V", "L"));
      } else {
        result.push("XC");
      }
    }

    if (length === 3) {
      if (arr[0] <= 8) {
        result.push(numerals[arr[0]].replaceAll("I", "C").replaceAll("V", "D"));
      } else {
        result.push("CM");
      }    
    }

    if (length === 4) {
      result.push("M".repeat(arr[0]));
    }

    arr.shift();
    return;
  }

  while (numArr.length) {
    determine(numArr, numArr.length);
  }

  return result.join("");

};
