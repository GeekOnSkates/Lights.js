/**
 * Creates a single light bulb
 * @param {string} color The light's color (i.e. "blue" or "#000033")
 * @param {number} [size] The light's size, in pixels (default is 20)
 * @param {number} [rotation] The light's rotation, in degrees
 * @returns {Element} A DIV with the CSS required to make it a light
 */
function createLight(color, size, rotation) {
	if (!rotation) rotation = 0;
	if (!size) size = 20;
	rotation -= 45;	// so the default is straight
	let l = document.createElement("div");
	l.style.width = size + "px";
	l.style.height = size + "px";
	l.style.display = "inline-block";
	l.style.backgroundColor = color;
	l.style.borderRadius = "100% 4px";
	l.style.transform = "rotate(" + rotation + "deg)";
	document.body.appendChild(l);
	turnOff(l);
	return l;
}

/**
 * Turns off a light
 * @param {Element} A light created by calling createLight() above
 */
function turnOff(l) {
	l.style.opacity = 0.1;
	l.style["box-shadow"] = "none";
}

/**
 * Turns on a light
 * @param {Element} A light created by calling createLight() above
 */
function turnOn(l) {
	l.style.opacity = 1;
	l.style["box-shadow"] = "1px 1px 15px " + l.style.backgroundColor;
}

/**
 * Checks if a light is on
 * @param {Element} A light created by calling createLight() above
 * @returns {boolean} True if the light is on, false if it isn't
 */
function isOn(l) {
	return l.style.opacity == 1;
}

/**
 * Sets a light's color
 * @param {Element} A light created by calling createLight() above
 * @param {string} A color (i.e. "red" or "#ff0000")
 * @returns {boolean} True if the light is on, false if it isn't
 */
function setLightColor(l, c) {
	l.style.backgroundColor = c;
}
