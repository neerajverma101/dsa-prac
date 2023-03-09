const isPalindrome = function (num = 0) {
    let revNum = 0
    let remain = 0
    const oriNum = num
    while (num > 0) {
        remain = num % 10
        num = parseInt(num / 10)
        revNum = revNum * 10 + remain
    }
    console.log(`${oriNum} is ${oriNum === revNum ? 'palindrome' : 'not palindrome'}`)
};

// isPalindrome(121)
// isPalindrome(1231)
// isPalindrome(12321)

const twoSum = function (nums, target) {
    const mapObj = new Map();
    for (let index = 0; index < nums.length; index++) {
        if (mapObj.has(target - nums[index])) {
            return [mapObj.get(target - nums[index]), index]
        }
        mapObj.set(nums[index], index)
    }
};

// console.log(twoSum([2, 7, 11], 9))
// console.log(twoSum([3, 2, 4], 6))
// console.log(twoSum([3, 3], 6))
// console.log(twoSum([-1, -2, -3, -4, -5], -8))
// console.log(twoSum([-11, 7, 3, 2, 1, 7, -10, 11, 21, 3], 11))


var addTwoNumbers = function (l1, l2) {
    return [...(listToInt(l1) + listToInt(l2)).toString()].reverse()
};

const listToInt = (list = []) => {
    console.log(list)
    return parseInt(reverse(list).join(""))
}

const reverse = (array = []) => {
    const res = []
    for (let i = 0; i < array.length; i++) {
        res.unshift(arr[i])
    }
    return res
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))

