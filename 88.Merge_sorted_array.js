const merge = (nums1, m, nums2, n) => {
  nums1.splice(m, nums1.length)
  nums2.splice(n, nums2.length)
  for(let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i])
  }
  nums1.sort((a, b) => a - b)
}

const arr1 = [0]
const arr2 = [1]

console.log(merge(arr1, 0, arr2, 1))










circleIntersection=([x,y],[X,Y],r)=>r*r*(l=2*(M=Math).acos(M.hypot(X-x,Y-y)/(2*r)),l-M.sin(l))|0







