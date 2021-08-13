// Create a class CallCounter that tracks the number of calls a client has made within the last 3 seconds. Your class should contain one method, ping(int t) that receives the current timestamp (in milliseconds) of a new call being made and returns the number of calls made within the last 3 seconds.
// Note: you may assume that the time associated with each subsequent call to ping is strictly increasing.

// Ex: Given the following calls to ping…

// ping(1), return 1 (1 call within the last 3 seconds)
// ping(300), return 2 (2 calls within the last 3 seconds)
// ping(3000), return 3 (3 calls within the last 3 seconds)
// ping(3002), return 3 (3 calls within the last 3 seconds)
// ping(7000), return 1 (1 call within the last 3 seconds)

class CallCounter{
    
    constructor(){
        this.queue = []
    }
    
    ping(t){
      //add the current t to the end
        this.queue.push(t)
       // if the previous t is not in the range
        while(this.queue[0] < t - 3000){
        // we remove from the beginning
          this.queue.shift()
        }
        
        //return the size of the queue
        return this.queue.length;
    };
};


// Another One with queue


// class RecentCounter {
//   Queue<Integer> queue;
//  public RecentCounter() {
//      queue = new LinkedList<>();
//  }
 
//  public int ping(int t) {
//      queue.add(t);
//      while (queue.peek() < t - 3000) {
//          queue.remove();
//      }
 
//      return queue.size();
//  }
 
//  }