// 연결리스트 & 구조체 학습

// 노드 구조체 (헤드 노드 제외)
typedef struct ListNode {   
    int data;
    struct ListNode* link;
} listNode;

// 헤드 노드 구조체
typedef struct { // 구조체 이름 생략
    listNode* head;
} linkedList_h;

// 헤드 노드 생성
linkedList_h* createLinkedList_h(void) {
    linkedList_h* H;
    H = (linkedList_h*)malloc(sizeof(linkedList_h));
    H → head = NULL;
    return H;
}

// typedef : 자료형 정의
// struct : 여러 자료형의 변수들을 하나로 묶은 자료형, 구조체 정의
// ListNode : 구조체 이름
//            => struct ListNode myList;로 ListNode 자료형을 가지는 변수를 선언할 수 있다.
// listNode : 구조체 별칭
//            => listNode myList;로 listNode 자료형을 가지는 변수를 선언할 수 있다.
// struct LinkNode* : 구조체 ListNode를 가리키는 포인터 타입

// (linkedList_h*)값 : 자료형 변환 void => linkedList_h
// malloc(sizeof(linkedList_h)) : 메모리 할당 & 포인터 반환

// 응용
struct ListNode {
    int data;
    struct ListNode* link;
} listNode;

// listNode : 변수 이름
