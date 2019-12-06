let letterWidth = 10, letterHeight = 15;

function letterA(lights, n, x, y) {
	setLightPosition(lights[n], x + (letterWidth * 4), y + (letterHeight * 2));
	setLightPosition(lights[n + 1], x + letterWidth, y);
	setLightPosition(lights[n + 2], x + (letterWidth * 2), y);
	setLightPosition(lights[n + 3], x + (letterWidth * 3), y);
	setLightPosition(lights[n + 4], x, y + letterHeight);
	setLightPosition(lights[n + 5], x, y + (letterHeight * 2));
	setLightPosition(lights[n + 6], x, y + (letterHeight * 3));
	setLightPosition(lights[n + 7], x, y + (letterHeight * 4));
	setLightPosition(lights[n + 8], x + (letterWidth * 4), y + letterHeight);
	setLightPosition(lights[n + 9], x + (letterWidth * 4), y + (letterHeight * 3));
	setLightPosition(lights[n + 10], x + (letterWidth * 4), y + (letterHeight * 4));
	setLightPosition(lights[n + 11], x + letterWidth, y + (letterHeight * 2));
	setLightPosition(lights[n + 12], x + (letterWidth * 2), y + (letterHeight * 2));
	setLightPosition(lights[n + 13], x + (letterWidth * 3), y + (letterHeight * 2));
	return n + 14;
}
function letterC(lights, n, x, y) {
	setLightPosition(lights[n], x + letterWidth, y);
	setLightPosition(lights[n + 1], x + (letterWidth * 2), y);
	setLightPosition(lights[n + 2], x + (letterWidth * 3), y);
	setLightPosition(lights[n + 3], x + (letterWidth * 4), y);
	setLightPosition(lights[n + 4], x, y + letterHeight);
	setLightPosition(lights[n + 5], x, y + (letterHeight * 2));
	setLightPosition(lights[n + 6], x, y + (letterHeight * 3));
	setLightPosition(lights[n + 7], x + letterWidth, y + (letterHeight * 4));
	setLightPosition(lights[n + 8], x + (letterWidth * 2), y + (letterHeight * 4));
	setLightPosition(lights[n + 9], x + (letterWidth * 3), y + (letterHeight * 4));
	setLightPosition(lights[n + 10], x + (letterWidth * 4), y + (letterHeight * 4));
	return n + 11;
}
function letterE(lights, n, x, y) {
	setLightPosition(lights[n], x, y);
	setLightPosition(lights[n + 1], x + letterWidth, y);
	setLightPosition(lights[n + 2], x + (letterWidth * 2), y);
	setLightPosition(lights[n + 3], x + (letterWidth * 3), y);
	setLightPosition(lights[n + 4], x + (letterWidth * 4), y);
	setLightPosition(lights[n + 5], x, y + letterHeight);
	setLightPosition(lights[n + 6], x, y + (letterHeight * 2));
	setLightPosition(lights[n + 7], x, y + (letterHeight * 3));
	setLightPosition(lights[n + 8], x, y + (letterHeight * 4));
	setLightPosition(lights[n + 9], x + letterWidth, y + (letterHeight * 2));
	setLightPosition(lights[n + 10], x + (letterWidth * 2), y + (letterHeight * 2));
	setLightPosition(lights[n + 11], x + (letterWidth * 3), y + (letterHeight * 2));
	setLightPosition(lights[n + 12], x + letterWidth, y + (letterHeight * 4));
	setLightPosition(lights[n + 13], x + (letterWidth * 2), y + (letterHeight * 4));
	setLightPosition(lights[n + 14], x + (letterWidth * 3), y + (letterHeight * 4));
	setLightPosition(lights[n + 15], x + (letterWidth * 4), y + (letterHeight * 4));
	return n + 16;
}
function letterH(lights, n, x, y) {
	setLightPosition(lights[n], x, y);
	setLightPosition(lights[n + 1], x, y + letterHeight);
	setLightPosition(lights[n + 2], x, y + (letterHeight * 2));
	setLightPosition(lights[n + 3], x, y + (letterHeight * 3));
	setLightPosition(lights[n + 4], x, y + (letterHeight * 4));
	setLightPosition(lights[n + 5], x + letterWidth, y + (letterHeight * 2));
	setLightPosition(lights[n + 6], x + (letterWidth * 2), y + (letterHeight * 2));
	setLightPosition(lights[n + 7], x + (letterWidth * 3), y + (letterHeight * 2));
	setLightPosition(lights[n + 8], x + (letterWidth * 4), y);
	setLightPosition(lights[n + 9], x + (letterWidth * 4), y + letterHeight);
	setLightPosition(lights[n + 10], x + (letterWidth * 4), y + (letterHeight * 2));
	setLightPosition(lights[n + 11], x + (letterWidth * 4), y + (letterHeight * 3));
	setLightPosition(lights[n + 12], x + (letterWidth * 4), y + (letterHeight * 4));
	return n + 13;
}
function letterI(lights, n, x, y) {
	setLightPosition(lights[n], x, y);
	setLightPosition(lights[n + 1], x + letterWidth, y);
	setLightPosition(lights[n + 2], x + (letterWidth * 2), y);
	setLightPosition(lights[n + 3], x + (letterWidth * 3), y);
	setLightPosition(lights[n + 4], x + (letterWidth * 4), y);
	setLightPosition(lights[n + 5], x + (letterWidth * 2), y + letterHeight);
	setLightPosition(lights[n + 6], x + (letterWidth * 2), y + (letterHeight * 2));
	setLightPosition(lights[n + 7], x + (letterWidth * 2), y + (letterHeight * 3));
	setLightPosition(lights[n + 8], x, y + (letterHeight * 4));
	setLightPosition(lights[n + 9], x + letterWidth, y + (letterHeight * 4));
	setLightPosition(lights[n + 10], x + (letterWidth * 2), y + (letterHeight * 4));
	setLightPosition(lights[n + 11], x + (letterWidth * 3), y + (letterHeight * 4));
	setLightPosition(lights[n + 12], x + (letterWidth * 4), y + (letterHeight * 4));
	return n + 13;
}
function letterM(lights, n, x, y) {
	setLightPosition(lights[n], x, y);
	setLightPosition(lights[n + 1], x, y + letterHeight);
	setLightPosition(lights[n + 2], x, y + (letterHeight * 2));
	setLightPosition(lights[n + 3], x, y + (letterHeight * 3));
	setLightPosition(lights[n + 4], x, y + (letterHeight * 4));
	setLightPosition(lights[n + 5], x + letterWidth, y + letterHeight);
	setLightPosition(lights[n + 6], x + (letterWidth * 2), y + (letterHeight * 2));
	setLightPosition(lights[n + 7], x + (letterWidth * 3), y + letterHeight);
	setLightPosition(lights[n + 8], x + (letterWidth * 4), y);
	setLightPosition(lights[n + 9], x + (letterWidth * 4), y + letterHeight);
	setLightPosition(lights[n + 10], x + (letterWidth * 4), y + (letterHeight * 2));
	setLightPosition(lights[n + 11], x + (letterWidth * 4), y + (letterHeight * 3));
	setLightPosition(lights[n + 12], x + (letterWidth * 4), y + (letterHeight * 4));
	return n + 13;
}
function letterR(lights, n, x, y) {
	setLightPosition(lights[n], x, y);
	setLightPosition(lights[n + 1], x + letterWidth, y);
	setLightPosition(lights[n + 2], x + (letterWidth * 2), y);
	setLightPosition(lights[n + 3], x + (letterWidth * 3), y);
	setLightPosition(lights[n + 4], x, y + letterHeight);
	setLightPosition(lights[n + 5], x, y + (letterHeight * 2));
	setLightPosition(lights[n + 6], x, y + (letterHeight * 3));
	setLightPosition(lights[n + 7], x, y + (letterHeight * 4));
	setLightPosition(lights[n + 8], x + (letterWidth * 4), y + letterHeight);
	setLightPosition(lights[n + 9], x + (letterWidth * 4), y + (letterHeight * 3));
	setLightPosition(lights[n + 10], x + (letterWidth * 4), y + (letterHeight * 4));
	setLightPosition(lights[n + 11], x + letterWidth, y + (letterHeight * 2));
	setLightPosition(lights[n + 12], x + (letterWidth * 2), y + (letterHeight * 2));
	setLightPosition(lights[n + 13], x + (letterWidth * 3), y + (letterHeight * 2));
	return n + 14;
}
function letterS(lights, n, x, y) {
	setLightPosition(lights[n], x + letterWidth, y);
	setLightPosition(lights[n + 1], x + (letterWidth * 2), y);
	setLightPosition(lights[n + 2], x + (letterWidth * 3), y);
	setLightPosition(lights[n + 3], x + (letterWidth * 4), y);
	setLightPosition(lights[n + 4], x, y + letterHeight);
	setLightPosition(lights[n + 5], x + letterWidth, y + (letterHeight * 2));
	setLightPosition(lights[n + 6], x + (letterWidth * 2), y + (letterHeight * 2));
	setLightPosition(lights[n + 7], x + (letterWidth * 3), y + (letterHeight * 2));
	setLightPosition(lights[n + 8], x + (letterWidth * 4), y + (letterHeight * 3));
	setLightPosition(lights[n + 9], x, y + (letterHeight * 4));
	setLightPosition(lights[n + 10], x + letterWidth, y + (letterHeight * 4));
	setLightPosition(lights[n + 11], x + (letterWidth * 2), y + (letterHeight * 4));
	setLightPosition(lights[n + 12], x + (letterWidth * 3), y + (letterHeight * 4));
	return n + 13;
}
function letterT(lights, n, x, y) {
	setLightPosition(lights[n], x, y);
	setLightPosition(lights[n + 1], x + letterWidth, y);
	setLightPosition(lights[n + 2], x + (letterWidth * 2), y);
	setLightPosition(lights[n + 3], x + (letterWidth * 3), y);
	setLightPosition(lights[n + 4], x + (letterWidth * 4), y);
	setLightPosition(lights[n + 5], x + (letterWidth * 2), y + letterHeight);
	setLightPosition(lights[n + 6], x + (letterWidth * 2), y + (letterHeight * 2));
	setLightPosition(lights[n + 7], x + (letterWidth * 2), y + (letterHeight * 3));
	setLightPosition(lights[n + 8], x + (letterWidth * 2), y + (letterHeight * 4));
	return n + 9;
}
function letterY(lights, n, x, y) {
	setLightPosition(lights[n], x, y);
	setLightPosition(lights[n + 1], x + letterWidth, y + letterHeight);
	setLightPosition(lights[n + 2], x + (letterWidth * 2), y + (letterHeight * 2));
	setLightPosition(lights[n + 3], x + (letterWidth * 3), y + letterHeight);
	setLightPosition(lights[n + 4], x + (letterWidth * 4), y);
	setLightPosition(lights[n + 5], x + (letterWidth * 2), y + (letterHeight * 3));
	setLightPosition(lights[n + 6], x + (letterWidth * 2), y + (letterHeight * 4));
	return n + 7;
}
