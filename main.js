var lruRequire = require("./module/lru/lru");

var lru = lruRequire(5);

console.log("Element not existing: " + lru.get(2));

lru.put("1", "a");
console.log("1");
lru.put("2", "b");
console.log("2");
lru.put("3", "c");
console.log("3");
lru.put("4", "d");
console.log("4");
lru.put("5", "e");
console.log("5");
console.log("Get key 1: " + lru.get(2));
lru.put("1", "aa");
console.log("1");
lru.put("6", "f");
console.log("6");

console.log("Get key 1: " + lru.get(1));

console.log("Key 2 already removed: " + lru.get(2));
