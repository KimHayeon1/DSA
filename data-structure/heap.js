class MinHeap {
  constructor() {
    this.heap = [null];
  }
 
  getMin() {
    return this.heap[1];
  }
 
  getSize() {
    return this.heap.length - 1;
  }
 
  isEmpty() {
    return this.heap.length < 2;
  }
  
  insert(node) {
    let current = this.heap.length;

    while (current > 1 && this.heap[Math.trunc(current / 2)] > node) {
      this.heap[current] = this.heap[Math.trunc(current / 2)];
      current = Math.trunc(current / 2);
    }

    this.heap[current] = node;
  }
  
  delete() {      
    if (this.heap.length === 1) {
      return null;
    }

    const min = this.heap[1];

    if (this.heap.length === 2) {
      this.heap.splice(1);
      return min;
    }

    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.splice(-1);

    let parent = 1;
    let child = 2;
  
    while (child <= this.getSize()) {      
      if (this.heap[child + 1] && this.heap[child + 1] < this.heap[child]) {
        child++;
      }
  
      if (this.heap[parent] <= this.heap[child]) {
        break;
      }

      [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]];
      parent = child;
      child *= 2;
    }

    return min;
  }
}

// test
minHeap.insert(5);
minHeap.insert(7);
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(6);
minHeap.insert(8);
console.log(minHeap.heap);

minHeap.delete();
console.log(minHeap.heap);
minHeap.delete();
console.log(minHeap.heap);
minHeap.delete();
console.log(minHeap.heap);
minHeap.delete();
console.log(minHeap.heap);
