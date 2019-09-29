from algorithmus_analysis.basic.tree.TreeNode import TreeNode
from algorithmus_analysis.basic.tree.TreeTraverse import TreeTraverse


class Tree:
    def __init__(self):
        self.root = None

    def add(self, data):
        new_node = TreeNode(data)
        if self.root is None:
            self.root = new_node
            return
        self.__add__(self.root, new_node)

    def __add__(self, tree_node, new_node):
        if tree_node.data > new_node.data:
            if tree_node.left is None:
                tree_node.left = new_node
            else:
                self.__add__(tree_node.left, new_node)
        elif tree_node.data < new_node.data:
            if tree_node.right is None:
                tree_node.right = new_node
            else:
                self.__add__(tree_node.right, new_node)

    def find(self, data):
        if data is None:
            return None
        else:
            self.__find__(self.root, data)

    def __find__(self, node, data):
        if node is None:
            print("The number isn't in the tree :(")
            return
        if node.data is data:
            print("The number is in the tree :)")
            return
        if node.data > data:
            self.__find__(node.left, data)
        else:
            self.__find__(node.right, data)

    def get_tree(self):
        return self.root


if __name__ == '__main__':
    tree = Tree()
    tree.add(5)
    tree.add(2)
    tree.add(8)
    tree.add(1)
    tree.add(3)

    tree.find(1)
    tree.find(9)
    tree.find(7)

    print("****************")

    traverse = TreeTraverse()
    traverse.preorder_traverse(tree.get_tree())
    print("****************")
    traverse.inorder_traverse(tree.get_tree())
    print("****************")
    traverse.postorder_traverse(tree.get_tree())
