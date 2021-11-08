'use strict';
const utils = require('../../../utils/code.js');
const google3 = require('google3');
var fromIntInViewingConditions = function (argb) {
    const redL = 100 * google3.linearized(((argb & 16711680) >> 16) / 255), greenL = 100 * google3.linearized(((argb & 65280) >> 8) / 255), blueL = 100 * google3.linearized((argb & 255) / 255), x = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL, y = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL, z = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL, rD = google3.DEFAULT.rgbD[0] * (0.401288 * x + 0.650173 * y - 0.051461 * z), gD = google3.DEFAULT.rgbD[1] * (-0.250268 * x + 1.204414 * y + 0.045854 * z), bD = google3.DEFAULT.rgbD[2] * (-0.002079 * x + 0.048952 * y + 0.953127 * z), rAF = Math.pow(google3.DEFAULT.fl * Math.abs(rD) / 100, 0.42), gAF = Math.pow(google3.DEFAULT.fl * Math.abs(gD) / 100, 0.42), bAF = Math.pow(google3.DEFAULT.fl * Math.abs(bD) / 100, 0.42), rA = 400 * utils.math_utils_signum(rD) * rAF / (rAF + 27.13), gA = 400 * utils.math_utils_signum(gD) * gAF / (gAF + 27.13), bA = 400 * utils.math_utils_signum(bD) * bAF / (bAF + 27.13), a = (11 * rA + -12 * gA + bA) / 11, b = (rA + gA - 2 * bA) / 9, atanDegrees = 180 * Math.atan2(b, a) / Math.PI, hue = 0 > atanDegrees ? atanDegrees + 360 : 360 <= atanDegrees ? atanDegrees - 360 : atanDegrees, hueRadians = hue * Math.PI / 180, j = 100 * Math.pow((40 * rA + 20 * gA + bA) / 20 * google3.DEFAULT.nbb / google3.DEFAULT.aw, google3.DEFAULT.c * google3.DEFAULT.z), alpha = Math.pow(50000 / 13 * 0.25 * (Math.cos((20.14 > hue ? hue + 360 : hue) * Math.PI / 180 + 2) + 3.8) * google3.DEFAULT.nc * google3.DEFAULT.ncb * Math.sqrt(a * a + b * b) / ((20 * rA + 20 * gA + 21 * bA) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, google3.DEFAULT.n), 0.73), c = alpha * Math.sqrt(j / 100), mstar = 1 / 0.0228 * Math.log(1 + 0.0228 * c * google3.DEFAULT.fLRoot);
    return new google3.CAM16(hue, c, j, 4 / google3.DEFAULT.c * Math.sqrt(j / 100) * (google3.DEFAULT.aw + 4) * google3.DEFAULT.fLRoot, 50 * Math.sqrt(alpha * google3.DEFAULT.c / (google3.DEFAULT.aw + 4)), (1 + 100 * 0.007) * j / (1 + 0.007 * j), mstar * Math.cos(hueRadians), mstar * Math.sin(hueRadians));
};
var fromJchInViewingConditions = function (j, c, h) {
    const hueRadians = h * Math.PI / 180, mstar = 1 / 0.0228 * Math.log(1 + 0.0228 * c * google3.DEFAULT.fLRoot);
    return new google3.CAM16(h, c, j, 4 / google3.DEFAULT.c * Math.sqrt(j / 100) * (google3.DEFAULT.aw + 4) * google3.DEFAULT.fLRoot, 50 * Math.sqrt(c / Math.sqrt(j / 100) * google3.DEFAULT.c / (google3.DEFAULT.aw + 4)), (1 + 100 * 0.007) * j / (1 + 0.007 * j), mstar * Math.cos(hueRadians), mstar * Math.sin(hueRadians));
};