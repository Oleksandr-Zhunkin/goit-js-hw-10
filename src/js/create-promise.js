export function createPromise(delay, radioValue) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioValue === 'fulfilled') {
        resolve(delay);
      }
      if (radioValue === 'rejected') {
        reject(delay);
      } else {
        return;
      }
    }, delay);
  });
  return promise;
}
