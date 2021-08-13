class MyStack  {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    };
  
    push(elem) {
      if(this.q1.length > 0) {
        this.q1.push(elem);
      } else {
        this.q2.push(elem); 
      }
    };
  
    pop() {
      if(this.q1.length === 0 && this.q2.length === 0)
        return null;
  
      if(this.q1.length > 0) {
        while(this.q1.length > 1) {
          var elem = this.q1.shift();
          this.q2.push(elem);
        }
        return this.q1.shift();
      } else {
        while(this.q2.length > 1) {
          var elem = this.q2.shift();
          this.q1.push(elem);
        }
        return this.q2.shift();
      }
    };
  
    top() {
      if(this.q1.length === 0 && this.q2.length === 0)
        return null;
  
      if(this.q1.length > 0) {
        var elem = this.pop();
        this.q2.push(elem);
        return elem;
      } else {
        var elem = this.pop();
        this.q1.push(elem);
        return elem;
      }
    };
  
    empty() {
      return this.q1.length == 0 && this.q2.length === 0;
    };
  }
  