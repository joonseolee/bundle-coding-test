def cal():
    length, count = map(int, input().split())
    array = [d for d in range(length + 1)]
    result = ""
    for _ in range(count):
        connect, node1, node2 = map(int, input().split())
        if connect is 0:
            union_find(array, node1, node2)
        else:
            result += find_parent(array, node1, node2)
    print(result)


def get_parent(parent, x):
    if parent[x] is x:
        return x
    return get_parent(parent, parent[x])


def union_find(parent, a, b):
    _a = get_parent(parent, a)
    _b = get_parent(parent, b)
    if _a > _b:
        parent[_a] = b
    else:
        parent[_b] = _a


def find_parent(parent, a, b):
    _a = get_parent(parent, a)
    _b = get_parent(parent, b)
    if _a is _b:
        return "YES\n"
    else:
        return "NO\n"


if __name__ == '__main__':
    cal()