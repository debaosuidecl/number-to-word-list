class Prediction {
    constructor(sequence) {
        this.sequence = sequence;
        this.keys = {

            "2": ["a", "b", "c"],
            "3": ["d", "e", "f"],
            "4": ["g", "h", "i"],
            "5": ["j", "k", "l"],
            "6": ["m", "n", "o"],
            "7": ["p", "q", "r", "s"],
            "8": ["t", "u", "v"],
            "9": ["w", "x", "y", "z"],
        }
    }





    /*   
        @description: Returns List of Possible Words using convertNumericSequenceToLetterEquivalent and recursiveLetterMatching methods
        @returns   {
            error:  Boolean
            message: String
            data: String[]
            success: Boolean
        }
    */
    predict() {
        let letterMatrix = this.convertNumericSequenceToLetterEquivalent(this.sequence)
        if (!letterMatrix) {
            return {
                error: true,
                message: "Could not find search keys",
                data: [],
                success: false,
            }
        }
        const words = this.recursiveLetterMatching(letterMatrix).sort()
        return {
            success: true,
            error: false,
            data: words,
            message: "Success"
        }

    }
    /*   
        @description: Converts Numeric strings to a letter matrix according to the keys property
        @returns   String[][] | false
    */
    convertNumericSequenceToLetterEquivalent() {
        // if secquence is not a numeric string return false
        if (isNaN(this.sequence)) {
            return false;
        }
        const listOfNumbers = this.sequence.split("");
        const lettersKeys = []
        for (let i = 0; i < listOfNumbers.length; i++) {
            const number = listOfNumbers[i];
            // if the number is not present in the struct return
            if (!this.keys.hasOwnProperty(`${number}`)) {
                return []
            }
            lettersKeys.push(this.keys[number])
        }
        return lettersKeys;

    }
    /*   
        @description: Recursively Parses the letter matrix to generate a list of word strings according to row order
        @returns   String[]
    */
    recursiveLetterMatching(letterMatrix) {

        if (letterMatrix.length === 0) {
            return [];
        } else if (letterMatrix.length === 1) {
            return letterMatrix[0];
        } else {
            let result = [];
            //@slice matrix to the last row and spread the tree to the top
            let everyLetterGroupButFirst = this.recursiveLetterMatching(letterMatrix.slice(1));
            for (let j = 0; j < everyLetterGroupButFirst.length; j++) {
                for (let i = 0; i < letterMatrix[0].length; i++) {
                    result.push(letterMatrix[0][i] + everyLetterGroupButFirst[j]);
                }
            }
            return result;
        }
    }

}


module.exports = Prediction;