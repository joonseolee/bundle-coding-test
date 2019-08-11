# Link -> https://www.acmicpc.net/problem/2798

from itertools import combinations


def combination_test():
    result = 0
    count, target = map(int, input().split())
    for num in combinations(list(map(int, input().split())), 3):
        s = sum(num)
        if target >= s > result:
            result = s
    return result


if __name__ == '__main__':
    print(combination_test())
