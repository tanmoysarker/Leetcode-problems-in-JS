// Given two integer arrays, return their intersection.
// Note: the intersection is the set of elements that are common to both arrays.

// Ex: Given the following arrays...

// nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
// nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
// nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []

function findCommon(a, b){ 
    var setA = new Set(a);
    var setB = new Set(b);
    if (a.length > b.length) {
      var common = new Set([...setA].filter(x => setB.has(x)))
    } else {
      var common =new Set([...setB].filter(x => setA.has(x)))
    }
    return Array.from(common);
}
findCommon([2,4,6,8],[1,3]);