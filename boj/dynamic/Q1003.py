def cal():
    cnt = int(input())
    target = [int(input()) for __a in range(cnt)]

    for num in target:
        a, b = 1, 0
        for each in range(num):
            a, b = b, a + b
        print(str(a) + " " + str(b))


if __name__ == '__main__':
    cal()
