import sys


def cal():
    count = int(sys.stdin.readline())
    stduents = []
    for _ in range(count):
        stduent = sys.stdin.readline().split()
        stduent[1] = int(stduent[1])
        stduent[2] = int(stduent[2])
        stduent[3] = int(stduent[3])
        stduents.append(stduent)
    stduents.sort(key=lambda stduent: (-stduent[1], stduent[2], -stduent[3], stduent[0]))
    for name, _, _, _ in stduents:
        print("%s" % name)


if __name__ == '__main__':
    cal()
#  리스트앞에 - 를 붙히면 내림차순으로 정렬, 반대일경우 오름차순으로 정렬
