numberOfLetters(201);

function numberOfLetters(num) {
    const firstDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const tenths = ['ten', 'eleven', 'tweleve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'ninteen'];
    const secondDigit = ['', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    numberInLetters = "";
    if (num <= 10) {
        //the number is one digits
        numberInLetters = firstDigit[num];
    } else if (num === 100) {
        numberInLetters = 'hundred';
    } else if (num < 100) {
        //the number is two digits
        let tenth = Math.floor(num / 10);
        if (tenth === 1) {
            //then pick the letters form tenth array
            let one = num - (tenth*10);
            numberInLetters = tenths[one];
        } else {
            //pick the letters from second digit array
            let one = num - (tenth * 10);
            numberInLetters = secondDigit[tenth] + " " + firstDigit[one];
        }
    } else if (num < 1000) {
        //the number is three digits
        //237
        let hundredth = Math.floor(num / 100);
        let tenth = Math.floor((num - (hundredth * 100)) / 10);
        let one = num - (hundredth * 100) - (tenth * 10);
        if (tenth === 1) {
            numberInLetters = firstDigit[hundredth] + " hundred " + tenths[one];
        } else {
            numberInLetters = firstDigit[hundredth] + " hundred " + secondDigit[tenth] + " " + firstDigit[one];
        }
    } else if (num = 1000) {
        numberInLetters = 'one thousand';
    }
    console.log(numberInLetters);
    charArray = numberInLetters.split('');
    numOfLetters = charArray.length;
    console.log(numOfLetters)
    return numOfLetters;
}