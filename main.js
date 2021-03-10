// ICAO My )))
let arr1 = prompt('wee');
str = arr1.toLowerCase();
arr = [...str];

console.log(arr)


icao = new Map();

icao.set("0", "zero");
icao.set("1", "one");
icao.set("2", "two");
icao.set("3", "three");
icao.set("4", "four");
icao.set("5", "five");
icao.set("6", "six");
icao.set("7", "seven");
icao.set("8", "eight");
icao.set("9", "nine");
icao.set("a", "Alex");
icao.set("b", "Bred");
icao.set("c", "Caty");
icao.set("d", "Diana");
icao.set("e", "Enton");
icao.set("f", "Fox");
icao.set("g", "God");
icao.set("h", "Help");
icao.set("j", "Juriy");
icao.set("k", "Kate");
icao.set("l", "Lena");
icao.set("m", "Marina");
icao.set("n", "Nicola");
icao.set("o", "Olga");
icao.set("p", "Petya");
icao.set("q", "Quadro");
icao.set("r", "Riana");
icao.set("s", "Stas");
icao.set("t", "Tolik");
icao.set("u", "Urka");
icao.set("v", "Volvo");
icao.set("w", "Wolf");
icao.set("x", "Xibit");
icao.set("y", "Yan");
icao.set("z", "Zoro");

let word;
for (i = 0; i < arr.length; i++) {
	word = icao.get(arr[i]);
	console.log(word);
}





