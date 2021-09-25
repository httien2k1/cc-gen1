const cards = require("../cards.js");
const { ccggen, } = require("ccg-card-generator");

const options = {
	"debug": true,
  "customStyles": "./styles/basic.css",
};

const output = "./cards.pdf"

ccggen( cards.cards, output, options);