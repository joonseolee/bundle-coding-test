import sys
import time


def cal():
    start_time = time.time()
    n, _ = map(int, sys.stdin.readline().split())
    result = 0

    for _ in range(n):
        number_list = list(map(int, sys.stdin.readline().split()))
        min_value = min(number_list)
        result = max(result, min_value)

    print('time: %s' % (time.time() - start_time))
    print(result)


if __name__ == '__main__':
    cal()
