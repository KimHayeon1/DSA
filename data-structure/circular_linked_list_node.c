// 맨 뒤에 추가
void addNode(linkedList_h* H, int data) {
    listNode* newNode = (listNode*)malloc(sizeof(listNode)); // listNode 타입의 포인터
    newNode->data = data;
    newNode->link = NULL;

    // 리스트가 비어 있으면, 새 노드를 헤드 노드로 설정
    if (H->head == NULL) {
        newNode->link = newNode;  // 자기 자신 가리킴
        H->head = newNode;
        return;
    }

    listNode* temp = H->head;

    // 헤드가 가리키는 노드, 즉 첫번째 노드를 가리키는 마지막 노드 찾기
    while (temp->link != H->head) {
        temp = temp->link;
    }
  
    temp->link = newNode; // 마지막 노드의 link에 새 노드 주소 할당
    newNode->link = H->head;   // 새 노드는 헤드를 가리킴
}

// 맨 앞에 추가
void addFirstNode(linkedList_h* H, int data) {
    listNode* newNode = (listNode*)malloc(sizeof(listNode));
    newNode->data = data;

    if (H->head == NULL) {  // 비어있으면
        newNode->link = newNode;  // 자기 자신 가리킴
        H->head = newNode;
        return;
    }

    listNode* temp = H->head;

    // 마지막 노드 찾기
    while (temp->link != H->head) {
        temp = temp->link;
    }

    newNode->link = H->head;  // 새 노드가 기존 첫 노드 가리킴
    temp->link = newNode;     // 마지막 노드가 새 노드, 즉 첫 노드를 가리키도록 변경
    H->head = newNode;        // 헤드를 새 노드로 변경
}

// 특정 노드 뒤에 추가
void addNodeAfter(listNode* prevNode, int data) {
    listNode* newNode = (listNode*)malloc(sizeof(listNode));
    newNode->data = data;

    newNode->link = prevNode->link;  // 새 노드의 link는 prevNode가 가리키던 노드
    prevNode->link = newNode;        // prevNode의 link는 새 노드
}
