package ImplementDataStructure;

public class QueueWithStack {
    class MyQueue {

        Stack<Integer> first;
        Stack<Integer> second;

        /** Initialize your data structure here. */
        public MyQueue() {

            first = new Stack<>();
            second = new Stack<>();

        }

        /** Push element x to the back of queue. */
        public void push(int x) {
            first.push(x);
        }

        /** Removes the element from in front of queue and returns that element. */
        public int pop() {
            while (first.size() > 0) {
                second.push(first.pop());
            }
            int temp = second.pop();
            while (second.size() > 0) {
                first.push(second.pop());
            }
            return temp;
        }

        /** Get the front element. */
        public int peek() {
            while (first.size() > 0) {
                second.push(first.pop());
            }
            int temp = second.peek();
            while (second.size() > 0) {
                first.push(second.pop());
            }
            return temp;
        }

        /** Returns whether the queue is empty. */
        public boolean empty() {
            return (first.size() == 0);
        }
    }

    /**
     * Your MyQueue object will be instantiated and called as such: MyQueue obj =
     * new MyQueue(); obj.push(x); int param_2 = obj.pop(); int param_3 =
     * obj.peek(); boolean param_4 = obj.empty();
     */
}
