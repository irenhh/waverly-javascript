export const getRandomElements = <T>(arr: T[], length: number): T[] => {
  if (length > arr.length) {
    throw new RangeError('getRandomElements: more elements taken than available');
  }

  let number = length;
  const result = new Array(number);
  let len = arr.length;
  const taken = new Array(len);

  while (number) {
    number -= 1;

    const x = Math.floor(Math.random() * len);
    const index = x in taken ? taken[x] : x;

    result[number] = arr[index];

    len -= 1;
    taken[x] = len in taken ? taken[len] : len;
  }

  return result;
};
