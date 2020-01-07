import sys


dx = (-1, 1, 0, 0)
dy = (0, 0, -1, 1)


def cal():
    v, h, count = map(int, sys.stdin.readline().split())
    rectangles = [list(map(int, sys.stdin.readline().split())) for _ in range(count)]
    matrix = [[0] * v for _ in range(h)]
    stack = []
    result_numbers = 0  # 사격형의 갯수
    result_size = []  # 각 사격형의 크기

    for one in rectangles:
        hh, vv, dh, dv = one[0], one[1], one[2], one[3] # dh, dv 가 최대치
        for i in range(dh - hh):
            for j in range(dv - vv):
                matrix[hh + i][vv + j] = 1

    for i in range(h):
        for j in range(v):
            if matrix[i][j] == 0:
                stack.append((i, j))
                #  matrix[i][j] = 1  이건 BFS 를 할때
                one_size = _cal(matrix, v, h, stack)
                result_size.append(one_size)
                result_numbers += 1

    print(result_numbers)
    result_size.sort()
    [print(x, end=" ") for x in result_size]


#  DFS
def _cal(matrix, v, h, stack):
    size = 0
    while stack:
        x, y = stack.pop()
        if x < 0 or x >= h or y < 0 or y >= v:
            continue
        if matrix[x][y] != 0:
            continue
        size += 1
        matrix[x][y] = 1
        stack.append((x - 1, y))
        stack.append((x + 1, y))
        stack.append((x, y - 1))
        stack.append((x, y + 1))
    return size


#  BFS
def _call(matrix, v, h, stack):
    size = 1
    while stack:
        x, y = stack.pop()
        for i in range(4):
            xx = dx[i] + x
            yy = dy[i] + y
            if xx < 0 or xx >= h or yy < 0 or yy >= v:
                continue
            if matrix[xx][yy] != 0:
                continue
            size += 1
            matrix[xx][yy] = 1
            stack.append((xx, yy))
    return size


if __name__ == '__main__':
    cal()
