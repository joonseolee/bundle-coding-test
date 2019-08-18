#  https://jobc.tistory.com/153
def cal():
    count = int(input())
    stairs = [int(input()) for __a in range(count)]

    dp = []

    dp.append(stairs[0])
    dp.append(stairs[1] + dp[0])
    dp.append(max(stairs[2] + stairs[0], stairs[2] + stairs[1]))

    for i in range(3, count):
        dp.append(max(stairs[i] + dp[i - 2], stairs[i] + stairs[i - 1] + dp[i - 3]))
    print(dp[count - 1])


if __name__ == '__main__':
    cal()
