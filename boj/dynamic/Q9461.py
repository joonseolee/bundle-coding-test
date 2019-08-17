def cal():
    count = int(input())
    targets = [int(input()) for a in range(count)]
    for num in targets:
        if num <= 3:
            print(1)
            continue
        a, b, c = 1, 1, 1
        for loop in range(num - 3):
            a, b, c = b, c, a + b
        print(c)


if __name__ == '__main__':
    cal()
