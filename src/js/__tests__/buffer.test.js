import ArrayBufferConverter, { getBuffer } from '../buffer.js';

test('buferToString', () => {
  const bufConverter = new ArrayBufferConverter();
  const buf = new getBuffer();
  bufConverter.load(buf);
  const result = bufConverter.toString();
  const toBe = "{\"data\":{\"user\":{\"id\":1,\"name\":\"Hitman\",\"level\":10}}}"

  expect(result).toBe(toBe);
});
