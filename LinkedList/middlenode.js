/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let slow = head;
    let fast = head;
    
    while(slow !=null && fast != null && fast.next!= null){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};