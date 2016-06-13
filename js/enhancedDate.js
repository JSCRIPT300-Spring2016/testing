var _date = null;

var _days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

var _months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function _initializeDate() {
  _date = new Date();
}

function setDate(date) {
  if (date instanceof Date || Number.isInteger(date)) {
    _date = new Date(date);
  }

  if (!date) {
    _initializeDate();
  }
}

function getDate(options) {
  if (_date === null) {
    _initializeDate();
  }

  if (options && options.format === 'formatted') {
    return getDayName() + ', ' + getMonthName() + ' ' + _date.getDate();
  }

  if (!options || options.format === 'milliseconds') {
    return _date.getTime();
  }

  return 'usage: getDate(), getDate({ format: "formatted" }), or getDate({ format: "milliseconds" })';
}

function getDayName() {
  if (_date === null) {
    _initializeDate();
  }

  return _days[_date.getDay()];
}

function getMonthName() {
  if (_date === null) {
    _initializeDate();
  }

  return _months[_date.getMonth()];
}

function isToday() {
  if (_date === null) {
    _initializeDate();
  }
  var now = new Date();

  return now.getDate() === _date.getDate() &&
         now.getFullYear() === _date.getFullYear() &&
         now.getMonth() === _date.getMonth();

}

function isFuture() {
  if (_date === null) {
    _initializeDate();
  }
  var now = new Date();

  return _date.getTime() > now.getTime();
}

module.exports = {
  setDate: setDate,
  getDate: getDate,
  getDayName: getDayName,
  getMonthName: getMonthName,
  isToday: isToday,
  isFuture: isFuture
};
