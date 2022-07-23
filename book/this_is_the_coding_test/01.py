import sys


def cal():
    _, m, k = map(int, sys.stdin.readline().split())
    number_list = list(map(int, sys.stdin.readline().split()))

    number_list.sort()
    first = number_list[-1]
    second = number_list[-2]

    count = int(m / (k + 1)) * k
    count += m % (k + 1)

    result = count * first
    result += (m - count) * second

    print(result)


if __name__ == '__main__':
    cal()
