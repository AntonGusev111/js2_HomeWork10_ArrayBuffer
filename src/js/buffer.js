export default class ArrayBufferConverter {
  constructor() {
    this.buffer = undefined;
  }

  load(buffer) {
    this.buffer = new Uint8Array(buffer);
  }

  toString() {
    let str = '';
    for (let i = 0; i < this.buffer.length; i++) {
      str += String.fromCharCode(this.buffer[i]);
    }
    return (str);
  }
}

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

//let bf = new ArrayBufferConverter();
//bf.load(getBuffer());
//bf.toString();
