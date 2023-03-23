function TurnsAFlatArrayIntoNestedArrays(
  noPerNestedArray: number,
  flatArray: any[]
) {
  const finalArray = [];
  const chunkSize = noPerNestedArray;
  for (let i = 0; i < flatArray.length; i += chunkSize) {
    const chunk = flatArray.slice(i, i + chunkSize);

    finalArray.push(chunk);
  }
  return finalArray;
}

export { TurnsAFlatArrayIntoNestedArrays };
