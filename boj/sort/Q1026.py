def cal():
    size = int(input())
    a = list(map(int, input().split()))
    b = list(map(int, input().split()))
    a.sort()
    b.sort()
    b.reverse()
    result = 0
    for index in range(size):
        result += a[index] * b[index]
    print(result)


def cal2():
    input()
    a = sorted(map(int, input().split()))
    b = sorted(map(int, input().split()), reverse=True)
    print(sum(n * m for n, m in zip(a, b)))


if __name__ == '__main__':
    cal()
