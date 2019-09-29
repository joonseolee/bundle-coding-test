from algorithmus_analysis.basic.stack.Node import Node


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None

    def is_empty(self):
        if not self.head:
            return True
        return False

    def enqueue(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.head = new_node
            self.tail = new_node
            return
        self.tail.next = new_node
        self.tail = new_node

    def dequeue(self):
        if self.is_empty():
            return None

        left_node = self.head.data
        self.head = self.head.next
        return left_node

    def peek(self):
        if self.is_empty():
            return None
        return self.head.data


if __name__ == '__main__':
    queue = Queue()

    print(queue.is_empty())

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)

    while not queue.is_empty():
        print("deleted data : {}".format(queue.dequeue()))
