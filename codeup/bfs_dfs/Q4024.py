import sys
input = sys.stdin.readline

dx = (0, 0, 1, -1, 1, -1, 1, -1)
dy = (1, -1, 0, 0, 1, -1, -1, 1)


def cal():
    w, h = map(int, input().split())
    area = [list(input().split()) for _ in range(h)]
    numbers = 0

    for i in range(h):
        for j in range(w):
            if area[i][j] == 'L':
                _cal(area, w, h, i, j)
                numbers += 1

    print(numbers)


def _cal(area, w, h, i, j):
    if 0 > i or 0 > j or i >= h or j >= w or area[i][j] != 'L':
        return
    area[i][j] = '.'
    for k in range(8):
        _cal(area, w, h, i + dx[k], j + dy[k])


if __name__ == '__main__':
    cal()
