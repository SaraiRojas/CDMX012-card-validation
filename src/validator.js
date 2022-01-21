const validator = {
  
  isValid: (cardNum) => {

    let inversedCardNum = [...cardNum].reverse();
    let cardDoubleNums = [...cardNum].reverse();/*An array is created to storage doubled values*/
    const reducer = (a, b) => Number(a) + Number(b); /* Function used in reduce method */

    for (let i=1; i < cardNum.length; i+=2){
        let doubleNum = inversedCardNum[i]*2; /* Data type of doubleNum is number */
        if ( doubleNum > 9){
            let oneDigit = doubleNum -9; 
            cardDoubleNums.splice(i, 1, oneDigit); /*adds an element in a specific position to an Array*/
        }else{
            cardDoubleNums.splice(i, 1, doubleNum);
        }
    }

    let sumNums = cardDoubleNums.reduce(reducer);

    if (sumNums%10 == 0){
        return true
    }else{
        return false
    }
  },

  maskify: (cardNum) => {
    
    let cardNums = [...cardNum]; /*Creates an array out of cardNum*/
    let maskNums = cardNums.map(function (num, i){
        if (i <= cardNums.length-5){
            return '#'
        }else{
            return num
        }
    });

    return maskNums.join('') /*Returns an array as a string*/
  }

};

export default validator;
