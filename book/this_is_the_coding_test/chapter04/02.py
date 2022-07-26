import sys


def cal():
    line = int(sys.stdin.readline().strip())
    directions = sys.stdin.readline().split()

    x, y = 1, 1

    for direction in directions:
        if direction == 'R':
            y += 0 if line == y else 1
        if direction == 'L':
            y -= 0 if y == 1 else 1
        if direction == 'U':
            x -= 0 if x == 1 else 1
        if direction == 'D':
            x += 0 if line == x else 1

    print('%s %s' % (x, y))


if __name__ == '__main__':
    cal()
