const bytesToSize = (bytes = 1.6e7) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return `${Math.round(bytes / 1024 ** i, 2)} ${sizes[i]}`;
};

export const getValidationError = (v, label, value) => {
  const name = label?.replace('*', '');
  switch (v.type) {
    case 'required':
      return `${name || 'This'} is a required field.`;
    case 'email':
      return 'Please enter a valid email.';
    case 'url':
      return 'Please enter a valid URL.';
    case 'payload-size':
      return `Payload size must be below ${bytesToSize(v.maxSize)}.`;
    default:
      return 'Invalid value';
  }
};
