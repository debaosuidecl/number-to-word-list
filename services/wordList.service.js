
const fs = require("fs");
const path = require("path");
const Trie = require("../classes/trieWords.class")

exports.buildWordsArray = async () => {  // returns an array of words
    return new Promise((resolve, reject) => {
        let chunks = ""
        const wordstream = fs.createReadStream(path.join(`${__dirname}`, "..", "assets", "wordlist.txt"), 'utf-8')
        wordstream.on('data', chunk => {
            chunks += chunk
        });
        wordstream.on("end", () => {
            resolve(this.removeDuplicatesFromList(chunks.toLowerCase().split("\n")))
        })

        wordstream.on("error", (err) => {
            reject(err)
        })
    })

}
//  build Trie datasctructure from extracted words
exports.buildTrie = (words) => { // returns words with the  Trie 
    //build Trie
    const trieWordDatabase = new Trie()
    for (let i = 0; i < words.length; i++) {
        trieWordDatabase.add(words[i])
    }
    return trieWordDatabase;
}
exports.removeDuplicatesFromList = (list = []) => {
    return Array.from(new Set(list))
}
exports.createWordsDatabase = async () => {
    try {
        const arrayOfWords = await this.buildWordsArray();
        return this.buildTrie(arrayOfWords)
    } catch (error) {
        console.log(error)
        return false;
    }


}