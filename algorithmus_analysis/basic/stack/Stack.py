from algorithmus_analysis.basic.stack.Node import Node


class Stack:
    def __init__(self):
        self.head = None

    def is_empty(self):
        if not self.head:
            return True
        return False

    def push(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def pop(self):
        if self.is_empty():
            return None
        top_node = self.head.data
        self.head = self.head.next
        return top_node

    def peek(self):
        if self.is_empty():
            return None
        return self.head.data


if __name__ == '__main__':
    stack = Stack()

    print(stack.is_empty())

    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)

    print("peek of data : {}".format(stack.peek()))  # 4

    while not stack.is_empty():
        print(stack.pop())
