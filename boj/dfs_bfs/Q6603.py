from itertools import combinations


def cal():
    while True:
        numbers = list(map(int, input().split()))
        if numbers[0] is 0:
            return
        del numbers[0]
        numbers_of_cases = list(combinations(numbers, 6))
        for case in numbers_of_cases:
            print(' '.join(map(repr, case)))
        print()


def cal2():
    while 1:
        arr = input().split()
        if arr.pop(0) == '0':
            break
        for i in combinations(arr, 6):
            print(" ".join(i))
        print()


if __name__ == '__main__':
    cal()
