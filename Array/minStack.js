/**
 * initialize your data structure here.
 * last in first out
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
 */
 var MinStack = function() {
    this.arr = [];
    this.min = [];

};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.min.length === 0){
        this.min.push(val);
    }else{
        let min = Math.min(this.min[this.min.length -1], val);
        this.min.push(min);
    }
    
    this.arr.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
    this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */