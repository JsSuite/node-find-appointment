const findAppointment = require('./index');

let schedules = [
  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];

describe('Finding appointment for 60 minutes', () => {
  const bestPossibleTime = findAppointment(schedules, 60);

  it('should not be null', () => {
    expect(bestPossibleTime).not.toBeNull();
  });

  it('should has startTime and endTime as property', () => {
    expect(bestPossibleTime.hasOwnProperty('startTime')).toBeTruthy();
    expect(bestPossibleTime.hasOwnProperty('endTime')).toBeTruthy();
  });

  it('should get 12:15 as startTime and 13:15 as endTime', () => {
    expect(bestPossibleTime.startTime).toBe('12:15');
    expect(bestPossibleTime.endTime).toBe('13:15');
  });
});

describe('Finding appointment for 130 minutes', () => {
  const bestPossibleTime = findAppointment(schedules, 130);

  it('should be null', () => {
    expect(bestPossibleTime).toBeNull();
  });
});


describe('Finding appointment for 75 minutes', () => {
  const bestPossibleTime = findAppointment(schedules, 75);

  it('should not be null', () => {
    expect(bestPossibleTime).not.toBeNull();
  });

  it('should has startTime and endTime as property', () => {
    expect(bestPossibleTime.hasOwnProperty('startTime')).toBeTruthy();
    expect(bestPossibleTime.hasOwnProperty('endTime')).toBeTruthy();
  });

  it('should get 12:15 as startTime and 13:30 as endTime', () => {
    expect(bestPossibleTime.startTime).toBe('12:15');
    expect(bestPossibleTime.endTime).toBe('13:30');
  });
});

describe('Finding appointment for 72 minutes', () => {
  const bestPossibleTime = findAppointment(schedules, 72);

  it('should not be null', () => {
    expect(bestPossibleTime).not.toBeNull();
  });

  it('should has startTime and endTime as property', () => {
    expect(bestPossibleTime.hasOwnProperty('startTime')).toBeTruthy();
    expect(bestPossibleTime.hasOwnProperty('endTime')).toBeTruthy();
  });

  it('should get 12:15 as startTime and 13:27 as endTime', () => {
    expect(bestPossibleTime.startTime).toBe('12:15');
    expect(bestPossibleTime.endTime).toBe('13:27');
  });
});


describe('Finding appointment for 90 minutes', () => {
  const bestPossibleTime = findAppointment(schedules, 90);

  it('should be null', () => {
    expect(bestPossibleTime).toBeNull();
  });
});

describe('Finding appointment for 76 minutes', () => {
  const bestPossibleTime = findAppointment(schedules, 76);

  it('should be null', () => {
    expect(bestPossibleTime).toBeNull();
  });
});