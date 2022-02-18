
nums1 = [1,2,3,0,0,0]; 
nums2 = [2,5,6];    
n = 3;
m = 3;

var merge = function(nums1, m ,nums2, n) {
    var i = m -1;
    var j = n -1;
    var k = m + n -1;
    for ( i,j,k; j >= 0; k--) {
        if (i < 0 || nums1[i] <= nums2[j]) {
            nums1[k] = nums2[j]
            j--
        } else {
            nums1[k] = nums1[i]
            i--
        }
    }
    return nums1

};

console.log(merge(nums1, m, nums2, n))

