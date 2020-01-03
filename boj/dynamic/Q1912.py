def cal():
    size = int(input())
    num = list(map(int, input().split()))
    sum = [num[0]]
    for i in range(1, size):
        sum.append(max(sum[i - 1] + num[i], num[i]))
    print(max(sum))


if __name__ == '__main__':
    cal()
