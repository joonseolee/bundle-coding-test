import sys
input = sys.stdin.readline


def cal():
    board = [list(map(int, input().split())) for _ in range(7)]
    stack = []
    result = 0

    for i in range(7):
        for j in range(7):
            color = board[i][j]
            stack.append((i, j))
            number = _cal(board, stack, color, 0)
            if number > 2:
                result += 1
    
    print(result)


def _cal(board, stack, color, number):
    while stack:
        x, y = stack.pop()
        if 0 > x or 0 > y or x > 6 or y > 6:
            continue
        if board[x][y] == 0:
            continue
        if board[x][y] == color:
            number += 1
            board[x][y] = 0
            stack.append((x - 1, y))
            stack.append((x + 1, y))
            stack.append((x, y - 1))
            stack.append((x, y + 1))
    return number


if __name__ == '__main__':
    cal()
