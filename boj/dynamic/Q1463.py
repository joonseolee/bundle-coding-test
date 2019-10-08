import sys


def cal():
    x = int(sys.stdin.realine())
    count = 0
    min_index = [x]
    if x == 1:
        print(count)
        return
    while True:
        min_index = _cal(min_index)
        count += 1
        if min(min_index) == 1:
            print(count)
            break


def _cal(x):
    index = []
    for i in x:
        index.append(i-1)
        if i % 3 == 0:
            index.append(i/3)
        if i % 2 == 0:
            index.append(i/2)
    return index


if __name__ == '__main__':
    cal()
