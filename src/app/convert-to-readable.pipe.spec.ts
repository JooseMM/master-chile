import { ConvertToReadablePipe } from './convert-to-readable.pipe';

describe('ConvertToReadablePipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertToReadablePipe();
    expect(pipe).toBeTruthy();
  });
});
