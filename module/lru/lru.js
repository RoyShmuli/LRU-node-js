var lruRequire = require("module/linkedList/linkedList");

module.exports = function lruRequire(maximumSize) {
    var dic = {};
    var sortedLinkedList = new LinkedList();

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
        return dic[key];
    };
};