def cal():
    count = int(input())
    numbers = [int(input()) for _ in range(count)]
    constants = [0, 1, 2, 4]
    for number in numbers:
        a, b, c = 1, 2, 4
        if number < 4:
            print(constants[number])
            continue
        for n in range(3, number):
            a, b, c = b, c, a + b + c
        print(c)


if __name__ == '__main__':
    cal()
