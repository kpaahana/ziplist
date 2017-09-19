/**
 * Write a function called zipList that accepts two lists of equal length and returns the result of alternatingly taking
 * elements. For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3], the function should return [‘a’, 1, ‘b’, 2,
 * ‘c’, 3]. zipList should not use Underscore. Now write a function called zipListTheSimpleWay that does the same thing
 * using Underscore.
 */

const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function ziplist(list1, list2){
  const resultList = [];
  for (let i = 0; i < list1.length; i++) {
    resultList.push(list1[i], list2[i]);
  }

  return resultList;
}

console.log(ziplist(testList1, testList2));

function zipListSimple(list1, list2){
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListSimple(testList1, testList2));
