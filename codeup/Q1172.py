def cal():
    int_list = list(map(int, input().split()))
    int_list.sort()
    [print(int_list[a], end='') for a in range(len(int_list))]


if __name__ == '__main__':
    cal()
