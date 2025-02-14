const removeFromArray = function(array, ...valuesToRemove) {
  const newArray = [];

  array.forEach(item => {
    if (!valuesToRemove.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
