var deleteDuplicatesLinkedList = function(head) {
    if(head==null) return head;
    
    let curr = head;
    while(curr != null){
        if(curr.next==null) break;
        if(curr.val == curr.next.val){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }
    return head;
    
};


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head)
 {
 if(head==null) return head;
 
 let curr = head;
 while(curr != null){
     if(curr.next==null) break;
     if(curr.val == curr.next.val){
         curr.next = curr.next.next;
     }else{
         curr = curr.next;
     }
 }
 return head;
