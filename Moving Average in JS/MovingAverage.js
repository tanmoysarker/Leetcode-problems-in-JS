// Design a class, MovingAverage, which contains a method, next that is responsible for returning the moving average from a stream of integers.
// Note: a moving average is the average of a subset of data at a given point in time.

// Ex: Given the following series of events...

// // i.e. the moving average has a capacity of 3.
// MovingAverage movingAverage = new MovingAverage(3);
// m.next(3) returns 3 because (3 / 1) = 3
// m.next(5) returns 4 because (3 + 5) / 2 = 4 
// m.next(7) = returns 5 because (3 + 5 + 7) / 3 = 5
// m.next(6) = returns 6 because (5 + 7 + 6) / 3 = 6

class MovingAverage {
    constructor(arrNum) {
        this.arr = [];
        this.arrNum = arrNum;
    }
    
    next(num) {
        var avg = 0;
        if(this.arr.length < this.arrNum) {
            this.arr.push(num);
            avg = this.findAvg();
        }
        else {
            this.arr.shift();
            this.arr.push(num);
            avg = this.findAvg();
        }
        console.log(avg.toFixed(1));
    }
    
    findAvg() {
        var average = 0, tot = 0;
        for(var i=0; i<this.arr.length; i++)
            tot += this.arr[i];
        return average = tot / this.arr.length;
    }
}

var m = new MovingAverage(3);

m.next(3);
m.next(5);
m.next(7);
m.next(6);