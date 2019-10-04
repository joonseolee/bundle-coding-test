def cal():
    number = list(input())
    number.sort()
    number.reverse()
    [print(a, end='') for a in number]


def cal2():
    print("".join(sorted(input()))[::-1])


if __name__ == '__main__':
    cal()
