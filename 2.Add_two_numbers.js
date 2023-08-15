function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
const transformToNumber = (list) => {
  let resStr = ''
  while(list) {
    resStr += list.val
    list = list.next
  }
  return parseInt(resStr)
}

const addTwoNumbers = (l1, l2) => {
  let l1Num = transformToNumber(l1)
  let l2Num = transformToNumber(l2)
  let res = l1Num + l2Num
  let resArr = res.toString().split('').map((item) => parseInt(item)).reverse()
  let result = new ListNode(resArr[0])
  let resultCopy = result
  for(let i = 1; i < resArr.length; i++) {
    resultCopy.next = new ListNode(resArr[i])
    resultCopy = resultCopy.next
  }
  return result
}

// const addTwoNumbers = (l1, l2) => {
//   let l1Copy = l1
//   let l2Copy = l2
//   let result = new ListNode()
//   let resultCopy = result
//   let shift = 0
//   while(l2Copy || l1Copy) {
//     let sum = l1Copy.val + l2Copy.val + shift
//     if (shift === 1) shift = 0
//     if (sum > 9) {
//       shift = 1
//       resultCopy.val = sum % 10
//     } else  {
//       resultCopy.val = sum
//     }
//     resultCopy.next = new ListNode()
//     resultCopy = resultCopy.next
//     l1Copy = l1Copy.next
//     l2Copy = l2Copy.next
//   }
//   return result
// }


console.log(addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(9))),
  new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9))))))