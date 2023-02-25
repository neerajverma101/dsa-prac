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

isPalindrome(121)
isPalindrome(1231)
isPalindrome(12321)