import sys


def cal1():
    n = int(sys.stdin.readline())
    t = []
    p = []

    for i in range(n):
        ti, pi = map(int, sys.stdin.readline().split())
        t.append(ti)
        p.append(pi)

    dp = [0 for _ in range(n)]

    ## 초기값
    ## 1일간만 상담해야 들어갈 수 있음
    if t[n - 1] == 1:
        dp[n - 1] = p[n - 1]

    ## 뒤에서부터 계산함
    for i in range(n - 2, -1, -1):
        day = i + t[i]

        ## 상담가능일이 n이랑 똑같으면 이후엔 상담불가능
        if day == n:
            dp[i] = max([p[i], dp[i + 1]])
        ## 상담 가능일이 n보다 작으면 이후에 상담가능
        elif day < n:
            dp[i] = max([p[i] + dp[day], dp[i + 1]])
        elif day > n:
            dp[i] = dp[i + 1]

    print(dp[0])


def cal2():
    n = int(input())
    t = []
    p = []
    dp = []
    for i in range(n):
        a, b = map(int, input().split())
        t.append(a)
        p.append(b)
        dp.append(b)
    dp.append(0)
    for i in range(n - 1, -1, -1):
        if t[i] + i > n:
            dp[i] = dp[i + 1]
        else:
            dp[i] = max(dp[i + 1], p[i] + dp[i + t[i]])
    print(dp[0])


if __name__ == '__main__':
    cal2()
