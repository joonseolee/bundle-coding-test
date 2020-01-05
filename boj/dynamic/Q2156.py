def cal():
    cnt = int(input())
    glasses = [int(input()) for _ in range(cnt)]
    dp = [0, glasses[0]]
    if cnt > 1:
        dp.append(glasses[0] + glasses[1])

    for i in range(3, cnt + 1):
        case1 = glasses[i - 1] + dp[i - 2]
        case2 = glasses[i - 1] + glasses[i - 2] + dp[i - 3]
        case3 = dp[i - 1]
        dp.append(max(case1, case2, case3))
    print(dp[cnt])


if __name__ == '__main__':
    cal()

# https://hwiyong.tistory.com/257
