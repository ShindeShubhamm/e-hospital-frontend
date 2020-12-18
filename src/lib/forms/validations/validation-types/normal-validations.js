// Required validation
export const required = (value) => {
  if (!value) {
    return false;
  }
  return true;
};

// Email validation
export const email = (value) => {
  const pattern = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  );
  return pattern.test(value);
};

// URL validation
export const url = (value) => {
  const pattern = new RegExp(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
  );
  return pattern.test(value);
};
