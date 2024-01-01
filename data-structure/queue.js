// Map
class Queue {
  constructor() {
    this.data = new Map();
    this.front = 0;
    this.rear = -1;
  }

  isEmpty() {
    if (this.rear === -1) {
      return true;
    }

    return false;
  }
  
  size() {
    return this.rear - this.front + 1;
  }

  enqueue(value) {
    this.rear++;
    this.data.set(`${this.rear}`, value);
  }

  dequeue() {
    // 언더플로
    if (this.isEmpty()) {
      console.error('큐가 공백 상태입니다');
      return;
    }
    
    const item = this.data.get(`${this.front}`);
    this.data.delete(`${this.front}`);

    if (this.front === this.rear) {
      this.front = 0;
      this.rear = -1;
    } else {
      this.front++;
    }

    return item;
  }
}

// 객체
class Queue {
  constructor() {
    this.data = {};
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    if (this.front === -1) {
      return true;
    }

    return false;
  }
  
  size() {
    if (this.isEmpty()) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  enqueue(value) {
    if (this.isEmpty()) {
      this.front++;
    }
    
    this.rear++;
    this.data[this.rear] = value;
  }

  dequeue() {
    // 언더플로
    if (this.isEmpty()) {
      console.error('큐가 공백 상태입니다');
      return;
    }
    
    const item = this.data[this.front];
    delete this.data[this.front];

    if (this.front === this.rear) {
      this.front, this.rear = -1;
    } else {
      this.front++;
    }

    return item;
  }
}
