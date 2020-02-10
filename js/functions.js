function numberToString(number, stringLength) {
    let numberInString = "0" + number;
    return numberInString.substr(numberInString.length - stringLength);
}

function getCurrentTime(timeElement, firstImg, lastImg) {
  timeElement = (timeElement < 10) ? '0' + timeElement : timeElement;

  let timeElementInString = numberToString(timeElement, 2);
  let lastTimeElementInString = timeElementInString[1];
  let firstTimeElementInString = timeElementInString[0];

  firstImg.src = 'img/' + firstTimeElementInString + '.jpg';
  lastImg.src = 'img/' +  lastTimeElementInString + '.jpg';

  return timeElement;
}

function changeHours () {
  const clockFirstHourImg = document.querySelector('.clock__hour--one');
  const clockLastHourImg = document.querySelector('.clock__hour--two');

  let clock = new Date;
  let hours = clock.getHours();

  getCurrentTime(hours, clockFirstHourImg, clockLastHourImg);
};

function changeMinutes () {
  const clockFirstMinuteImg = document.querySelector('.clock__minute--one');
  const clockLastMinuteImg = document.querySelector('.clock__minute--two');

  let clock = new Date;
  let minutes = clock.getMinutes();

  getCurrentTime(minutes, clockFirstMinuteImg, clockLastMinuteImg);
};

function changeSeconds () {
  const clockFirstSecondImg = document.querySelector('.clock__second--one');
  const clockLastSecondImg = document.querySelector('.clock__second--two');

  let clock = new Date;
  let seconds = clock.getSeconds();

  getCurrentTime(seconds, clockFirstSecondImg, clockLastSecondImg);
};

function startClock() {
  let clock = new Date;

  let seconds = changeSeconds();
  let minutes = changeMinutes();
  let hours = changeHours();

  if (seconds == 0) {
    minutes = changeMinutes();
  }

  if (minutes == 0) {
    hours = changeHours();
  }
}
