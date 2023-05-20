import hyperid from 'hyperid';

export const generateUniqueId = hyperid({
  fixedLength: false,
  urlSafe: true,
});