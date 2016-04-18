var LinkedList = function(e){

    var that = {};
    var first;
    var last;

    that.push = function(value){
        var node = new Node(value);

        if (first == null) {
            first = last = node;
        } else {
            node.previous = last;
            last.next = node;
            last = node;
        }
    };

    that.pop = function() {
        var value = first;
        first = first.next;
        return value;
    };

    that.remove = function(index) {
        var i = 0;
        var current = first;
        var previous;

        if (index === 0) {
            //handle special case - first node
            first = current.next;
        } else {
            while (i++ < index) {
                //set previous to first node
                previous = current;
                //set current to the next one
                current = current.next
            }
            //skip to the next node
            previous.next = current.next;
        }
        return current.value;
    };

    that.moveToLast = function(node) {
        if (node.previous == null) {
            if (node.next != null) {
                node.next.previous = null;
            }
        } else {

        }

        if (node.next != null) {
            node.next.previous = node.previous;
        }

        if (node.previous != null) {
            node.previous.next = node.next;
        }

        node.next = null;
        node.previous = last;
        last.next = node;
        last = node;
    };

    var Node = function(value){
        this.value = value;
        var next = null;
        var previous = null;
    };

    return that;
};
