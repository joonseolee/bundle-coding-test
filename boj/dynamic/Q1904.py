def cal():
    target = int(input())
    a, b = 0, 1
    for num in range(0, target):
        a, b = (b % 15746), ((a+b) % 15746)
    print(b)


if __name__ == '__main__':
    cal()
