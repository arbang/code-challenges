var isPalindrome = function(head)
    {
        if(head==null || head.next ==null) return true;
        let slow = head;
        let fast = head;
        
        while(fast !=null && fast.next!= null && fast.next.next!=null){
            slow = slow.next;
            fast = fast.next.next;
        }
        if(fast!=null){
            slow = slow.next;
        }
        slow = reverse(slow);
    
        while(slow!=null){
            if(slow.val != head.val)
                return false;
            
            slow=slow.next;
            head=head.next;
        }
        return true;