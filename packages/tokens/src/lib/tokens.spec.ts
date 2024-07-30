import {
  defaultTokens,
  getTokens,
  configureTokens,
  resetTokens,
} from './tokens';

describe('tokens', () => {
  it('should return default tokens', () => {
    expect(getTokens()).toEqual(defaultTokens);
  });

  it('should configure custom tokens', () => {
    const customTokens = {
      colors: {
        primary: { 500: '#custom-color' },
      },
    };

    configureTokens(customTokens);
    const tokens = getTokens();

    expect(tokens.colors.primary[500]).toBe('#custom-color');

    // Reset for other tests
    resetTokens();
  });

  it('should reset to default tokens', () => {
    configureTokens({ colors: { primary: { 500: '#custom' } } });
    resetTokens();
    expect(getTokens()).toEqual(defaultTokens);
  });
});
