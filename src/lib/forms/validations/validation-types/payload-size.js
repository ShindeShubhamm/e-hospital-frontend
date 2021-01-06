/* eslint-disable */
let bytes = 0;
export const payloadSize = (obj, v, recalled) => {
  if (!recalled) {
    bytes = 0;
  }
  if (obj !== null && obj !== undefined) {
    switch (typeof obj) {
      case 'number':
        bytes += 8;
        break;
      case 'string':
        bytes += obj.length * 2;
        break;
      case 'boolean':
        bytes += 4;
        break;
      case 'object':
        const objClass = Object.prototype.toString.call(obj).slice(8, -1);
        if (objClass === 'Object' || objClass === 'Array') {
          for (const key in obj) {
            if (!obj.hasOwnProperty(key)) continue;
            payloadSize(obj[key], v, true);
          }
        } else if (objClass === 'File') {
          bytes += obj.size;
        } else {
          bytes += obj.toString().length * 2;
        }
        break;
      default:
        break;
    }
  }

  if (bytes <= (v.maxSize || 1.6e7)) {
    return true;
  }
  return false;
};
