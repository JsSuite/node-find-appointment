"use strict";

const { findEarliestIdleTime, getEarliestIdleTime } = require('./util');
const { bestPossibleTime } = require('./model');

/**
 * 
 * @param {Array[Array]} schedules 
 * @param {number} duration 
 * @returns {bestPossibleTime} appointment
 */
function findAppointment(schedules, duration) {
  let earliestIdleTimeList = [];

  for (const [index, value] of schedules.entries()) {
    const individualEarliestIdleTime = findEarliestIdleTime(value, index, duration);
    if (!individualEarliestIdleTime || (!individualEarliestIdleTime.startTime && !individualEarliestIdleTime.endTime)) {
      return null;
    }
    earliestIdleTimeList.push(individualEarliestIdleTime);
  }

  const appointment = getEarliestIdleTime(earliestIdleTimeList, duration);

  return appointment;
}




module.exports = findAppointment;