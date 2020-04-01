const findAppointment = require('./index');

describe('Finding appointment', () => {
  let schedules = [
    [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
    [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
    [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
  ];

  const bestPossibleTime = findAppointment(schedules);

  it('should be defined', () => {
    expect(bestPossibleTime).toBeDefined();
  });

  it('should has startTime,endTime and duration as property', () => {
    expect(bestPossibleTime).toBeDefined();
    expect(bestPossibleTime.hasOwnProperty('startTime')).toBeTruthy();
    expect(bestPossibleTime.hasOwnProperty('endTime')).toBeTruthy();
    expect(bestPossibleTime.hasOwnProperty('duration')).toBeTruthy();
  });

  it('should give 12:15 as startTime, 13:15 as endTime and 60 minutes as duration', () => {
    expect(bestPossibleTime.startTime).toBe('12:15');
    expect(bestPossibleTime.endTime).toBe('13:15');
    expect(bestPossibleTime.duration).toBe(60);
  });
});