export const sleep = async (time) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, time);
  });
};
