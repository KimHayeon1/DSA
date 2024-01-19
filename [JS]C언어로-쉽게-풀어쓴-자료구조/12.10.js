/* 기수 정렬 */

// 큐
const MAX_QUEUE_SIZE = 100;

function error(message) {
  throw message;
}

function initQueue(q) {
  q.front = q.rear = 0;
}

function isEmpty(q) {
  return q.front === q.rear;
}

function isFull(q) {
  return q.rear + (1 % MAX_QUEUE_SIZE) === q.front;
}

function enqueue(q, item) {
  if (isFull(q)) {
    error("큐가 포화상태입니다");
  }

  q.rear = (q.rear + 1) % MAX_QUEUE_SIZE;
  q.data[q.rear] = item;
}

function dequeue(q) {
  if (isEmpty(q)) {
    error("큐가 공백상태입니다");
  }

  q.front = (q.front + 1) % MAX_QUEUE_SIZE;
  return q.data[q.front];
}

// 기수 정렬
const BUKETS = 10;
const DIGITS = 4;

function radixSort(list, n) {
  let i,
    b,
    d,
    factor = 1;
  const queues = Array.from({ length: BUKETS }, () => {
    return {
      data: [],
      front: 0,
      rear: 0,
    };
  });

  try {
    for (d = 0; d < DIGITS; d++) {
      for (i = 0; i < n; i++) {
        enqueue(queues[Math.trunc(list[i] / factor) % 10], list[i]);
      }

      for (b = i = 0; b < BUKETS; b++) {
        while (!isEmpty(queues[b])) {
          list[i++] = dequeue(queues[b]);
        }
      }

      factor *= 10;
    }
  } catch (error) {
    console.error(error);
  }
}

// 실행
const SIZE = 10;

function main() {
  const list = Array.from({ length: SIZE }, () =>
    Math.trunc(Math.random() * 100)
  );

  radixSort(list, SIZE);
  console.log(list);
}

main();
