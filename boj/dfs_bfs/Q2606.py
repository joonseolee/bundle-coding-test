import sys


def cal():
    _ = int(input())
    count = int(input())
    pairs = [list(map(int, input().split())) for _ in range(count)]

    x = [1]
    result = []

    while x:
        evidence = x.pop()
        for i in range(len(pairs)):
            if evidence in pairs[i]:
                a, b = pairs[i]
                if evidence == a:
                    x.append(b)
                    result.append(b)
                else:
                    x.append(a)
                    result.append(a)
                pairs[i] = [0, 0]

    print(len(set(result)))


def cal2():
    graph = {}
    init = int(sys.stdin.readline().strip())
    for i in range(1, init + 1):
        graph[i] = set()
    n = int(sys.stdin.readline().strip())
    for i in range(n):
        n, m = map(int, sys.stdin.readline().strip().split())
        graph[n].add(m)
        graph[m].add(n)

    visited = []

    def dfs(start):
        if start in visited:
            return
        else:
            visited.append(start)
            for i in graph[start]:
                dfs(i)

    dfs(1)
    print(len(visited) - 1)


if __name__ == '__main__':
    cal()
