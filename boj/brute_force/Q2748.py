def fibo():
    num = int(input())
    a = [0 for y in range(91)]

    a[0] = 0
    a[1] = 1
    #  a[2] = 1
    #  a[3] = 2
    #  a[4] = 4
    #  a[5] = 6

    for aa in range(2, 91):
        a[aa] = a[aa - 1] + a[aa - 2]
    print(a[num])


def fibo2():
    n = int(input())
    a, b = 0, 1
    for i in range(n):
        a, b = b, a + b
    print(a)


if __name__ == '__main__':
    fibo()
