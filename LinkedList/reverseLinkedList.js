
var reverseLinkedList = function(head) {
    let prev = null;
    let next = null;
    let curr = head;
    while(curr != null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

function reverse(head){
    let prev = null;
    let next = null;
                    
    while(head!=null){ 
        next = head.next;
        head.next = prev; 
        prev = head;
        head = next;
    }
    return prev;
}

};