const { getAirportDetails } = require('../src/airportDetails');

describe('function for fetching airport information', () => {
  it('should return relevant airport information', () => {
    expect(getAirportDetails('AAA')).toEqual({ Name: 'Anaa Airport', City: 'Anaa', Country: 'French Polynesia' });
  });
  it('should return invalid message if airport code given is not a string', () => {
    expect(getAirportDetails(123)).toBe('invalid input');
  });
  it('should return airport does not exist if code is not valid', () => {
    expect(getAirportDetails('rtf')).toBe('airport does not exist');
  });
});
