/**
 * Javascript String Extensions 
 * https://github.com/ugurhasar/StringExtensionsJS
 *
 * @author: twitter.com/ugurhasar
 *
 * Copyright (c) 2014 Uğur Hasar
 */

String.prototype.isNullOrEmpty = function () {
  return this === null || this.length === 0;
};

String.prototype.isNullOrWhitespace = function () {
  return this === null || this.replace(/\s/g, '').length === 0;
};

String.prototype.cleanRepetations = function () {
  return this.trim().replace(/\s+/g, ' ');
},

String.prototype.words = function (characters) {
  return this.trim(characters).cleanRepetations(characters).split(characters || /\s+/);
},

String.prototype.replaceAll = function (oldValue, newValue) {
  return this.replace(new RegExp(oldValue, 'g'), newValue);
};

String.prototype.trimLeft = function (character) {
  character = character || ' ';
  return this.replace(new RegExp('^[' + character + ']+'), "");
};

String.prototype.trimRight = function (character) {
  character = character || ' ';
  return this.replace(new RegExp('[' + character + ']+$'), "");
};

String.prototype.trim = function (character) {
  return this.trimLeft(character).trimRight(character);
};

String.prototype.startsWith = function (text) {
  return this.substring(0, text.length) === text;
};

String.prototype.endsWith = function (text) {
  return this.substring(this.length - text.length) === text;
};

String.prototype.append = function (text) {
  return this + text;
};

String.prototype.prepend = function (text) {
  return text + this;
};

String.prototype.isEmail = function () {
  return /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)$/i.test(this);
};

String.prototype.isURL = function () {
  return /^(?:\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])$/i.test(this);
};