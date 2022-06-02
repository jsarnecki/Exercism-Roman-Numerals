
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

  // Find length of number
  // If under 10, then see if it's above 5, etc.
  // Same with 50, 100, 500, etc

  // 4 - 8 = "V" involved
  // 10 - 40, 60 - 90 = "X" involved
  // 40 - 80 = "L" involved
  // 100 - 400, 600 - 900 = "C" involved
  // 400 - 800 = "D" involved
  // 900 - 3000 = "M" involved

  // if over 1000, auto "M" at front

  // Put numbers split in array, send through a function, counting the decPlaces,
  // when the finishes in the function, it removes the highest decimal point, and adds the letter
  // Sends through the function until all the decimal points are gone, and then return letters

  const result = [];

  // if we're only looking at the first number in the array,
  // using the length to determine if it's 1/10/100/1000, we can
  // convert it appropriately.

  const determine = function(arr, length) {
    //ReplaceAll with numbers depending on length
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
        result.push(numerals[arr[0]].replaceAll("X", "C"));
      }
    }
    if (length === 3) {
      if (arr[0] <= 8) {
        result.push(numerals[arr[0]].replaceAll("I", "C").replaceAll("V", "D"));
      } else {
        result.push(numerals[arr[0]].replaceAll("X", "M"));
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
