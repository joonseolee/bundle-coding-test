def cal():
    test = int(input())
    for _ in range(test):
        count = int(input())
        relation = {}
        size = {}
        for _ in range(count):
            a, b = input().split()
            if a not in relation:
                relation[a] = a
                size[a] = 1
            if b not in relation:
                relation[b] = b
                size[b] = 1
            
            _union(relation, a, b, size)
            print(str(size[_find_root(relation, a)]))


def _find(relation, x):
    if x == relation[x]:
        return x
    else:
        p = _find(relation, relation[x])
        relation[x] = p
        return p


def _union(relation, x, y, size):
    x = _find(relation, x)
    y = _find(relation, y)
    if x != y:
        relation[y] = x
        size[x] += size[y]


def _find_root(relation, x):
    if x == relation[x]:
        return x
    else:
        return _find_root(relation, relation[x])


if __name__ == '__main__':
    cal()
