import sys


def cal():
    count = int(sys.stdin.readline())
    a = list(set([sys.stdin.readline() for _a in range(count)]))
    a = sorted(a, key=lambda x: (len(x), x))
    [print(x, end='') for x in a]


if __name__ == '__main__':
    cal()
#  리스트중복 제거 https://bluese05.tistory.com/13
#  https://soooprmx.tistory.com/entry/리스트-정렬하는-방법
