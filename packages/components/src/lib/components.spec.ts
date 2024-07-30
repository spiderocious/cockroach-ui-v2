import { components, Button } from './components';

describe('components', () => {
  it('should work', () => {
    expect(components()).toEqual('components');
  });

  it('should export Button component', () => {
    expect(typeof Button).toBe('function');
  });
});
