import sys


#  Fail
def cal():
    count = int(sys.stdin.readline())
    a = sorted([int(sys.stdin.readline()) for _a in range(count)])
    [print(x) for x in a]


#  Success
def cal2():
    p = [0] * 10001
    count = int(sys.stdin.readline())
    for _a in range(count):
        p[int(sys.stdin.readline())] += 1
    [print('%s\n' % x * p[x], end='') for x in range(10001)]


if __name__ == '__main__':
    cal2()
