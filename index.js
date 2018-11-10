'use strict';
const alfy = require('alfy');
const camelCase = require('lodash.camelcase');

const camelizedText = camelCase(alfy.input);

alfy.output([{
	title: camelizedText,
	arg: camelizedText
}]);
