// expecting time to be a string in the format like '8:15' or '12:30'

const lookupTable = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'quarter',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
  30: 'half',
};

function convertTimeToWords(time) {
  if (time === '0:00') {
    return 'midnight';
  }

  let hour = parseInt(time.split(':')[0]);
  let minute = parseInt(time.split(':')[1]);

  const past30 = minute > 30;
  const middleWord = past30 ? 'to' : 'past';

  // Figure our the hour/minute to situation
  minute = past30 ? 60 - minute : minute;
  hour = past30 ? hour + 1 : hour;

  if (minute === '00') {
    if (hour === '12') {
      return 'midday';
    }

    return `${lookupTable[hour]} o'clock`;
  }

  return `${lookupTable[minute]} ${middleWord} ${lookupTable[hour]}`;
}

module.exports = { convertTimeToWords };