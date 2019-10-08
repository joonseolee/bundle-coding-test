def cal():
    n = int(input())
    a, b = 0, 1
    for _x in range(n):
        a, b = b, a + b
    print(a)


if __name__ == '__main__':
    cal()
