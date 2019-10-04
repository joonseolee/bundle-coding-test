def cal():
    count = int(input())
    x = [int(input()) for _a in range(count)]
    for step in reversed(range(len(x))):
        max_index = 0
        for i in range(1, 1+step):
            if x[i] > x[max_index]:
                max_index = i
            x[max_index], x[step] = x[step], x[max_index]
    [print(a) for a in x]


def cal2():
    count = int(input())
    x = [int(input()) for _a in range(count)]
    print(list(reversed(sorted(x))))


if __name__ == '__main__':
    cal()

#  reverse, reversed 또한 sort, sorted 랑 같은 형태이다.
#  첫번째꺼는 반환x,이고 자기것을 바꾸는대신 두번째는 반환만 한다.
