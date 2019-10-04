def cal():
    number = list(input())
    number.sort()
    number.reverse()
    [print(a, end='') for a in number]


#  https://blog.wonkyunglee.io/3 참고
def cal2():
    print("".join(sorted(input()))[::-1])


if __name__ == '__main__':
    cal()
