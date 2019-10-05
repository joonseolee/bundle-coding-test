import sys


def cal():
    count = int(sys.stdin.readline())
    x = []
    for _ in range(count):
        a, b = sys.stdin.readline().split()
        c = [int(a), b]
        x.append(c)
    x.sort(key=lambda x: x[0])
    for age, name in x:
        print("%d %s" % (age, name))


if __name__ == '__main__':
    cal()
