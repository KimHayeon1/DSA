listNode* findNodeByData(linkedList_h* H, int target) {
    listNode* temp = H->head;
  
    while (temp != NULL) {
        if (temp->data == target) {
            return temp;
        }
      
        temp = temp->link;
    }
  
    return NULL;
}
