void addNode(linkedList_h* H, int data) {
    listNode* newNode = (listNode*)malloc(sizeof(listNode)); // listNode 타입의 포인터
    newNode->data = data;
    newNode->link = NULL;

    // 리스트가 비어 있으면, 새 노드를 헤드 노드로 설정
    if (H->head == NULL) {
        H->head = newNode;
        return;
    }

    // 마지막 노드의 link에 새 노드 연결
    listNode* temp = H->head;
  
    while (temp->link != NULL) {  // 마지막 노드까지 이동
        temp = temp->link;
    }
  
    temp->link = newNode;
}

// -> : 구조체 멤버에 접근
