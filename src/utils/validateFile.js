export const imageFiles = ['jpg', 'jpeg', 'png', 'jfif', 'webp'];
export const recordFiles = [...imageFiles, 'pdf'];

const getFileExt = (filename) => {
  return filename?.split('.')?.pop()?.toLowerCase();
};

export const isValidImage = (filename) => {
  return imageFiles.includes(getFileExt(filename));
};

export const isValidRecord = (filename) => {
  return recordFiles.includes(getFileExt(filename));
};
