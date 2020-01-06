import sys


# 재귀를 사용한 해결방법
def cal():
    number = int(sys.stdin.readline().strip())
    matrix = [list(map(int, list(sys.stdin.readline().strip()))) for _ in range(number)]

    ans = []
    for i in range(number):
        for j in range(number):
            if matrix[i][j] == 1:
                ans.append(_cal(matrix, 1, i, j, number))

    print(len(ans))
    for i in sorted(ans):
        print(i)


def _cal(matrix, cnt, x, y, number):
    matrix[x][y] = 0
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]
    for index in range(4):
        n_x = x + dx[index]
        n_y = y + dy[index]
        if 0 <= n_x < number and 0 <= n_y < number:
            if matrix[n_x][n_y] == 1:
                cnt = _cal(matrix, cnt + 1, n_x, n_y, number)
    return cnt


#  스택을 사용하여 구현
def cal2():
    size = int(input())
    m = [list(input()) for _ in range(size)]
    stack = []
    noh = 0
    lst = []

    for y in range(size):
        for x in range(size):
            if m[y][x] == '1':
                stack.append((y, x))
                while len(stack) > 0:
                    noh = _cal2(size, m, stack, noh)
                lst.append(noh)
                noh = 0

    print(len(lst))
    for e in sorted(lst):
        print(e)


def _cal2(size, m, stack, noh):
    y, x = stack.pop()
    if 0 <= y < size and 0 <= x < size and m[y][x] == '1':
        stack.append((y-1, x))
        stack.append((y+1, x))
        stack.append((y, x-1))
        stack.append((y, x+1))
        m[y][x] = '0'
        noh += 1
        return noh
    return noh


if __name__ == '__main__':
    cal2()
#  https://joosjuliet.github.io/2667/
