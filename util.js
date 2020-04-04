const { bestPossibleTime } = require('./model');

function findEarliestIdleTime(schedule, personIndex, duration) {
  let earliestIdleTime = new bestPossibleTime();

  if (!schedule || !schedule.length) {
    console.error(`Schedule of person ${personIndex} is either undefined or not an array`);
    return null;
  }
  const allStartTime = schedule.map(x => x[0]);
  const allEndTime = schedule.map(x => x[1]);

  for (let i = 1; i < schedule.length; i++) {
    if (!allStartTime[i] || !allStartTime[i-1]) {
      return null;
    }

    const startingHour = allStartTime[i].split(':')[0];
    const startingMinute = allStartTime[i].split(':')[1];
    const endingHour = allEndTime[i - 1].split(':')[0];
    const endingMinute = allEndTime[i - 1].split(':')[1];

    const startingTime = new Date();
    startingTime.setHours(startingHour);
    startingTime.setMinutes(startingMinute);

    const endingTime = new Date();
    endingTime.setHours(endingHour);
    endingTime.setMinutes(endingMinute);

    const diffHours = Math.abs(endingTime - startingTime) / (60 * 1000); //change to minute
    if (!earliestIdleTime.startTime || !earliestIdleTime.endTime) {
      if (diffHours > duration) {
        earliestIdleTime.startTime = allEndTime[i - 1];
        earliestIdleTime.endTime = allStartTime[i];
        break;
      }
    }
  }
  return earliestIdleTime;
}

function getMaximumEndTime(idleTimeList) {
  let maximumEndTime;
  for (const idleTime of idleTimeList) {
    const idleEndHour = idleTime.endTime.split(':')[0];
    const idleEndMinute = idleTime.endTime.split(':')[1];
    const idleEndHourFloat = parseFloat(idleEndHour) + parseFloat(idleEndMinute / 60);

    if (!maximumEndTime) {
      maximumEndTime = idleEndHourFloat;
    }

    else if (maximumEndTime > idleEndHourFloat) {
      maximumEndTime = idleEndHourFloat;
    }
  }
  return maximumEndTime;
}

function getEarliestIdleTime(idleTimeList, duration) {
  let earliestIdleTime = new bestPossibleTime();
  let earliestIdleTimeFloat;
  const maximumEndTime = getMaximumEndTime(idleTimeList);

  for (const idleTime of idleTimeList) {
    const idleStartHour = idleTime.startTime.split(':')[0];
    const idleStartMinute = idleTime.startTime.split(':')[1];
    const idleStartHourFloat = parseFloat(idleStartHour) + parseFloat(idleStartMinute / 60);

    if (!earliestIdleTimeFloat) {
      earliestIdleTimeFloat = {
        startTime: idleStartHourFloat,
        endTime: idleStartHourFloat + parseFloat(duration / 60)
      };
    }
    else if (earliestIdleTimeFloat.startTime < idleStartHourFloat) {
      earliestIdleTimeFloat.startTime = idleStartHourFloat;
      earliestIdleTimeFloat.endTime = idleStartHourFloat + parseFloat(duration / 60);
    }

    if (earliestIdleTimeFloat.endTime > maximumEndTime) {
      return null;
    }
  }

  earliestIdleTimeFloat.startTime = earliestIdleTimeFloat.startTime.toFixed(2);
  earliestIdleTimeFloat.endTime = earliestIdleTimeFloat.endTime.toFixed(2);

  earliestIdleTime.startTime = earliestIdleTimeFloat.startTime.toString().split('.')[0] + ':'
    + Math.round((earliestIdleTimeFloat.startTime.toString().split('.')[1] * 60) / 100);

  earliestIdleTime.endTime = earliestIdleTimeFloat.endTime.toString().split('.')[0] + ':'
    + Math.round((earliestIdleTimeFloat.endTime.toString().split('.')[1] * 60) / 100);

  return earliestIdleTime;
}

module.exports = { findEarliestIdleTime, getEarliestIdleTime };