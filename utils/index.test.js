import { getWikipediaPageName, generateYearsOptions } from './index';

describe('utils:getWikipediaPageName', () => {
  test('should retrive the page name from a wikipedia url', () => {
    const url = 'http://wiki/my_page_name';
    expect(getWikipediaPageName(url)).toBe('my_page_name');
  });

  test('page name should be an empty string if its the home page', () => {
    const url = 'http://wiki/';
    expect(getWikipediaPageName(url)).toBe('');
  });

  test('page name should be an empty string if its not a wikipedia page', () => {
    const url = 'http://google.com/';
    expect(getWikipediaPageName(url)).toBe('');
  });
});

describe('utils:generateYearsOptions', () => {
  test('should generate options array from 2001 to 2004', () => {
    const options = [
      { text: '2001', value: 2001 },
      { text: '2002', value: 2002 },
      { text: '2003', value: 2003 },
      { text: '2004', value: 2004 },
    ];

    expect(generateYearsOptions(2001, 2004)).toEqual(options);
  });

  test('should generate only one option', () => {
    const options = [
      { text: '2001', value: 2001 },
    ];

    expect(generateYearsOptions(2001, 2001)).toEqual(options);
  });

  test('should throw an error if the first year is later than the last year', () => {
    expect(() => generateYearsOptions(20011, 2001)).toThrow('First year is bigger than last year');
  });
});
