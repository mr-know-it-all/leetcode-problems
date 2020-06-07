// https://leetcode.com/problems/median-of-two-sorted-arrays/

// There are two sorted arrays nums1 and nums2 of size m and n respectively.
//
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//
// You may assume nums1 and nums2 cannot be both empty.

// mergeSorted :: [Number] -> [Number] -> [Number]
function mergeSorted(a, b) {
    let r = [];
    while(a.length && b.length) r.push(a[0] < b[0] ? a.shift() : b.shift());
    return r.concat(a).concat(b);
}

// findMedianSortedArrays :: [Number] -< [Number] -> Number
const findMedianSortedArrays = (nums1, nums2) => {
    let result
    let mergedList = mergeSorted(nums1, nums2);

    let len = mergedList.length;

    result = (
        len % 2 === 0
        ? (mergedList[(len / 2) - 1] + mergedList[len / 2]) / 2
        :  mergedList[(len - 1) / 2]
    )

    return result;
};
