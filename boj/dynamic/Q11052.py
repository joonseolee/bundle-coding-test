def cal():
    count = int(input())
    p = [0] + list(map(int,input().split()))
    dp = [0] * (count+1)

    for i in range(1,count+1):
        for k in range(1,i+1):
            dp[i] = max(dp[i], p[k] + dp[i-k])

    print(dp[count])


if __name__ == '__main__':
    cal()
