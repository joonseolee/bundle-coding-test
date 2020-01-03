def cal():
    num = int(input())
    a, b = 1, 1
    if num == 0:
        print(0)
        return
    for _ in range(num):
        a, b = b, a + b
    print(a % 10007)


if __name__ == '__main__':
    cal()
