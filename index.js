"use strict";

class bestPossibleTime {
  constructor(startTime = '', endTime = '', duration = 0) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.duration = duration;
  }
}

function findEarliestIdleTime(schedule, personIndex) {
  if (!schedule || !schedule.length) {
    console.error(`Schedule of person ${personIndex} is either undefined or not an array`);
    return;
  }

  for (const [index, value] of schedule.entries()) {
    if (!value || value.length != 2) {
      console.error(`Timeframe ${index} of person ${personIndex} is either undefined or not an array or length is not 2`);
      return;
    }
  }
  return ['12:00', '13:00'];
}


function findAppointment(schedules) {
  const appointment = new bestPossibleTime();
  let earliestIdleTimeList = [];

  for (const [index, value] of schedules.entries()) {
    const individualEarliestIdleTime = findEarliestIdleTime(value, index);
    earliestIdleTimeList.push(individualEarliestIdleTime);
  }

  

  return appointment;
}




module.exports = findAppointment;