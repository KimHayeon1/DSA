void deleteLastNode(linkedList_h* H) {
    // 리스트에 노드가 없는 경우
    if (H->head == NULL) {
        return;
    }

    // 리스트에 노드가 하나만 있을 경우
    if (H->head->link == NULL) {
        free(H->head);
        H->head = NULL;
        return;
    }

    // 마지막에서 두번째 노드 찾기
    listNode* temp = H->head;

    while (temp->link->link != NULL) {
        temp = temp->link;
    }

    // 마지막 노드 삭제
    listNode* lastNode = temp->link;
    temp->link = NULL;
    free(lastNode);
}

void deleteNode(listNode* prevNode, listNode* delNode) {
    prevNode->link = delNode->link;
    free(delNode);
}
