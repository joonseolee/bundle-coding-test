import sys


def cal():
    numbers = list(map(int, sys.stdin.readline().split()))
    words = list(input())
    numbers.sort()
    for word in words:
        if 'A' is word:
            print("%d" % numbers[0], end=" ")
        elif 'B' is word:
            print("%d" % numbers[1], end=" ")
        elif 'C' is word:
            print("%d" % numbers[2], end=" ")


def cal2():
    numbers = sorted(map(int, input().split()))
    print(' '.join(map(lambda x: str(numbers[ord(x) - 65]), input())))


if __name__ == '__main__':
    cal()
