import sys
from collections import deque

dx = (-1, 1, 0, 0)
dy = (0, 0, -1, 1)


def cal():
    m, n = map(int, sys.stdin.readline().split()) #
    a = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
    q = deque()
    for i in range(n):
        for j in range(m):
            if a[i][j] == 1:
                q.append((i, j))

    _cal(a, n, m, q)
    answer = 0
    for i in range(n):
        if 0 in a[i]:
            return -1
        answer = max(answer, max(a[i]))
    return answer - 1


def _cal(a, n, m, q):
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = dx[i] + x
            ny = dy[i] + y
            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue
            if a[nx][ny]:
                continue
            a[nx][ny] = a[x][y] + 1
            q.append((nx, ny))


if __name__ == '__main__':
    print(cal())
