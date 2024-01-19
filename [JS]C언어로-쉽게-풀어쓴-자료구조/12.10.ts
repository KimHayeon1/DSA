/* 기수 정렬 */

// 큐
const MAX_QUEUE_SIZE = 100;
// lib.dom.d.ts에서 Element가 선언되었기 때문에, 타입 별칭 변경
type ElementType = number;
interface QueueType {
  data: ElementType[];
  front: number;
  rear: number;
}

function error(message: string): void {
  throw message;
}

function initQueue(q: QueueType): void {
  q.front = q.rear = 0;
}

function isEmpty(q: QueueType): boolean {
  return q.front === q.rear;
}

function isFull(q: QueueType): boolean {
  return q.rear + (1 % MAX_QUEUE_SIZE) === q.front;
}

function enqueue(q: QueueType, item: ElementType): void {
  if (isFull(q)) {
    error("큐가 포화상태입니다");
  }

  q.rear = (q.rear + 1) % MAX_QUEUE_SIZE;
  q.data[q.rear] = item;
}

function dequeue(q: QueueType): ElementType {
  if (isEmpty(q)) {
    error("큐가 공백상태입니다");
  }

  q.front = (q.front + 1) % MAX_QUEUE_SIZE;
  return q.data[q.front];
}

// 기수 정렬
const BUKETS = 10;
const DIGITS = 4;

function radixSort(list: number[], n: number): void {
  let i: number,
    b: number,
    d: number,
    factor = 1;
  const queues: QueueType[] = Array.from({ length: BUKETS }, () => {
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

function main(): void {
  const list: number[] = Array.from({ length: SIZE }, () =>
    Math.trunc(Math.random() * 100)
  );

  radixSort(list, SIZE);
  console.log(list);
}

main();
