//******************************* */
// Array for win and lose
//****************************** */
const easyArray = ["π", "π", "π", "π", "π", "π", "π", "π", "π₯"];
const mediumArray = ["π", "π", "π", "π", "π", "π", "π", "π", "π", "π", "π₯", "π₯"];
const hardArray = [
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π₯",
  "π₯",
  "π₯",
  "π₯",
];

// Suffle array to make it random
const suffler = function (array) {
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffleβ¦
  while (m) {
    // Pick a remaining elementβ¦
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m]; // This is the number of the array -1
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};
export const resSuffler = suffler(easyArray);
export const mediumSuffler = suffler(mediumArray);
export const hardSuffler = suffler(hardArray);
