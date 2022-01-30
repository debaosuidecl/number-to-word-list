/* Trie Data Structure */
const Node = require("./wordNode.class")


class Trie {
    constructor() {
        this.root = new Node();

    }
    add(input, node = this.root) {
        if (input.length == 0) {
            node.setEnd();
            return;
        } else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        };
    }
    isWord(word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false;
            } else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            };
        };
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ?
            true : false;
    };


    size() {
        let count = 0;
        let search = function (node, string) {
            if (node.keys.size != 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                };
                if (node.isEnd()) {
                    count++
                };
            } else {
                string.length > 0 ? count++ : undefined;
                return;
            };
        };
        search(this.root, new String());
        return count
    };


}
module.exports = Trie;
