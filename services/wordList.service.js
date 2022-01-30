
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
            resolve(chunks.toLowerCase().split("\n"))
        })

        wordstream.on("error", (err) => {
            reject(err)
        })
    })

}
//  build Trie datasctructure from extracted words
exports.buildTrie = (arrayOfWords) => { // returns words with the  Trie 
    words = Array.from(new Set(arrayOfWords))
    //build Trie
    const trieWordDatabase = new Trie()
    for (let i = 0; i < words.length; i++) {
        trieWordDatabase.add(words[i])
    }
    return trieWordDatabase;
}

exports.createWordsDatabase = async () => {
    try {
        const arrayOfWords = await this.buildWords();
        return this.buildTrie(arrayOfWords)
    } catch (error) {
        return false;
    }


}