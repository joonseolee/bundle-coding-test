import sys


def cal():
    size, location = map(int, sys.stdin.readline().split())
    x = list(map(int, sys.stdin.readline().split()))
    x.sort()
    print(x[location-1])


def cal2():
    n = map(int, input().split()[1])
    l = list(map(int, input().split()))
    print(sorted(l)[n - 1])


if __name__ == '__main__':
    cal()
