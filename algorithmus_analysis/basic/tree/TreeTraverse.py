class TreeTraverse:
    def preorder_traverse(self, tree):
        if tree is None:
            return
        print(tree.data)
        self.preorder_traverse(tree.left)
        self.preorder_traverse(tree.right)

    def inorder_traverse(self, tree):
        if tree is None:
            return
        self.inorder_traverse(tree.left)
        print(tree.data)
        self.inorder_traverse(tree.right)

    def postorder_traverse(self, tree):
        if tree is None:
            return
        self.postorder_traverse(tree.left)
        self.postorder_traverse(tree.right)
        print(tree.data)
