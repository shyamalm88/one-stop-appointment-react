const debounce = (callback, delay) => {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};

const formatTimeForEvent = (date, startTime, endTime) => {
  let startDateTime = "";
  let endDateTime = "";
  let error = null;
  if (date) {
    const dateTemp = date.format().split("+");
    const timezone = dateTemp[1];
    const [dateYear, hour, minute] = dateTemp[0].split(":");
    const slicedDateYear = dateYear.slice(0, -2);
    console.log(startTime.hours);
    const startTimeHours = startTime.hours
      ? startTime.hours()
      : startTime.getHours() < 10
      ? "0" + startTime.getHours()
      : startTime.getHours();
    const startTimeMinutes = startTime.minutes
      ? startTime.minutes()
      : startTime.getMinutes() < 10
      ? "0" + startTime.getMinutes()
      : startTime.getMinutes();
    const startTimeSeconds = "00";
    const endTimeHours = endTime.hours
      ? endTime.hours()
      : endTime.getHours() < 10
      ? "0" + endTime.getHours()
      : endTime.getHours();
    const endTimeMinutes = endTime.minutes
      ? endTime.minutes()
      : endTime.getMinutes() < 10
      ? "0" + endTime.getMinutes()
      : endTime.getMinutes();
    const endTimeSeconds = "00";
    console.log(startTimeSeconds);
    startDateTime =
      slicedDateYear +
      startTimeHours +
      ":" +
      startTimeMinutes +
      ":" +
      startTimeSeconds +
      "+" +
      timezone;
    endDateTime =
      slicedDateYear +
      endTimeHours +
      ":" +
      endTimeMinutes +
      ":" +
      endTimeSeconds +
      "+" +
      timezone;
    console.log(startDateTime);
    console.log(endDateTime);
    return [startDateTime, endDateTime, null];
  } else {
    return ["", "", error];
  }
};

export { debounce, formatTimeForEvent };
