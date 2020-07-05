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
