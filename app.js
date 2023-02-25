isPalindrome = function(num) {
    let revNum=0
    let remain=0
    const oriNum=num
    while(num>0){
        remain=num%10
        num=parseInt(num/10)
        revNum=revNum*10+remain
    }
    return oriNum===revNum
};

isPalindrome(121)
