import copy


def cal():
    line = int(input())
    matrix = [list(map(int, input().split())) for _ in range(line)]
    result = 0  # 만들수있는 최대 정사각형

    loop_count = max(map(max, matrix))

    for level in range(2, loop_count + 1):  # 최소 높이에서 최대 높이
        matrix_copy = copy.deepcopy(matrix)
        stack = []
        max_square = 0
        for x in range(line):  # 세로
            for y in range(line):  # 가로
                if matrix_copy[x][y] > level:
                    stack.append((x, y))
                    while len(stack) > 0:
                        _cal(matrix_copy, line, level, stack)
                    max_square += 1
        result = max_square if result <= max_square else result
    print(result)


def _cal(matrix_copy, line, level, stack):
    x, y = stack.pop()
    if 0 <= x < line and 0 <= y < line and matrix_copy[x][y] > level:
        stack.append((x + 1, y))
        stack.append((x - 1, y))
        stack.append((x, y + 1))
        stack.append((x, y - 1))
        matrix_copy[x][y] = 0


if __name__ == '__main__':
    cal()
