const sharp = require("sharp");

// put whatever folders names u wanna !
const INPUT_FOLDER_NAME = "";
const OUTPUT_FOLDER_NAME = "";

// put whatever u wanna
const PAIR_LEFT = 155;
const PAIR_TOP = 95;
const PAIR_WIDTH = 596;
const PAIR_HEIGHT = 917;

// put whatever u wanna
const IMPAIR_LEFT = 78;
const IMPAIR_TOP = 95;
const IMPAIR_WIDTH = 596;
const IMPAIR_HEIGHT = 917;

const START_PAGE_NUMBER = 5;
const TOTAL_PAGES_NUMBER = 606;

for (let i = START_PAGE_NUMBER; i <= TOTAL_PAGES_NUMBER; i++) {
  if (i % 2 === 0) {
    sharp(`./${INPUT_FOLDER_NAME}/${i}.png`)
      .extract({
        left: PAIR_LEFT,
        top: PAIR_TOP,
        width: PAIR_WIDTH,
        height: PAIR_HEIGHT,
      })
      .toFile(`./${OUTPUT_FOLDER_NAME}/${i - 2}.png`, function (err) {
        if (err) console.log(err);
      });
  } else {
    sharp(`./imgs/${i}.png`)
      .extract({
        left: IMPAIR_LEFT,
        top: IMPAIR_TOP,
        width: IMPAIR_WIDTH,
        height: IMPAIR_HEIGHT,
      })
      .toFile(`./warsh-asbahani_test/${i - 2}.png`, function (err) {
        if (err) console.log(err);
      });
  }
}
