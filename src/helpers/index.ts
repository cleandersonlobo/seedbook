export const formatFriendList = (array: any): any => {
  let index = 0;
  const arrayResult = array.reduce(
    (il, it) => {
      if (il[index].length === 5) {
        index += 1;
      }
      return {
        ...il,
        [index]: [...(il[index] || []), it],
      };
    },
    { 0: [] },
  );
  return arrayResult;
};

export const getRandomArray = (a: T[], n: number): T[] =>
  new Array(n).fill(null).map(() => a[Math.floor(Math.random() * a.length)]);

export const createRows = (data: T[], columns: number): T[] => {
  const rows = Math.floor(data.length / columns); // [A]
  let lastRowElements = data.length - rows * columns; // [B]
  while (lastRowElements !== columns) {
    // [C]
    data.push({
      // [D]
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true,
    });
    lastRowElements += 1; // [E]
  }
  console.tron(data);
  return data; // [F]
};
