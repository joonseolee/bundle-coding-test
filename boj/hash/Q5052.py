import sys


def cal():
    test_all = int(sys.stdin.readline())
    answer = ["NULL"] * test_all
    now_location = 0
    cases = [[] for _ in range(test_all)]

    for i in range(test_all):
        count = int(sys.stdin.readline())
        for _ in range(count):
            cases[i].append(input())

    for line in cases:
        for case in line:
            for i in range(len(line)):
                if case == line[i]:
                    continue
                if line[i].find(case) is 0 and answer[now_location] is "NULL":
                    answer[now_location] = "YES"
                    break
            if answer[now_location] is "YES":
                break
        if answer[now_location] is "NULL":
            answer[now_location] = "NO"
        now_location += 1

    [print(each) for each in answer]


def cal2():
    test_all = int(sys.stdin.readline())
    result = []
    for _ in range(test_all):
        num = int(sys.stdin.readline())
        numbers = []
        answer = "YES"
        for i in range(num):
            numbers.append(sys.stdin.readline().rstrip())
        numbers.sort()
        first = numbers[0]

        for context in numbers[1:]:
            if context.find(first) is 0:
                answer = "NO"
                break
            else:
                first = context
        result.append(answer)
    [print(ss) for ss in result]


if __name__ == '__main__':
    cal2()
