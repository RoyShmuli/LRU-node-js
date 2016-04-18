var linkedListRequire = require("../linkedList/linkedList");

module.exports = function Lru(maximumSize) {
    var dic = {};
    var sortedLinkedList = linkedListRequire();

    this.put = function(key, value) {
        if (key in dic) {
            var node = dic[key];
            node.value = value;
            sortedLinkedList.moveToLast(node);
        } else {
            if (dic.length >= maximumSize) {
                var oldestNode = sortedLinkedList.pop();
                delete dic[oldestNode.key];
            }
            dic[key] = sortedLinkedList.push(key, value);
        }
    };

    this.get = function(key) {
        if (key in dic) {
            return dic[key];
        }
        return null;
    };

    return this;
};