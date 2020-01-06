def cal():
    test_loop = int(input())
    result = []

    for _ in range(test_loop):
        height, width, count = map(int, input().split())
        matrix = [[0]*width for _ in range(height)]
        stack = []
        earthworms = 0
        for _ in range(count):
            x, y = map(int, input().split())
            matrix[x][y] = 1

        for a in range(height):
            for b in range(width):
                if matrix[a][b] is 1:
                    stack.append((a, b))
                    while len(stack) > 0:
                        _cal(height, width, matrix, stack)
                    earthworms += 1
        result.append(earthworms)
    for each in result:
        print(each)


def _cal(height, width, matrix, stack):
    x, y = stack.pop()
    if 0 <= x < height and 0 <= y < width and matrix[x][y] is 1:
        stack.append((x - 1, y))
        stack.append((x + 1, y))
        stack.append((x, y - 1))
        stack.append((x, y + 1))
        matrix[x][y] = 0


if __name__ == '__main__':
    cal()
