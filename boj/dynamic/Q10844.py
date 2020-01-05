def cal():
    N = int(input())

    num_list = [1] * 10  # 0 ~ 9
    num_list[0] = 0  # 0은 숫자가 아니므로

    for i in range(1, N):
        temp = [0] * 10
        for j in range(10):
            if (j == 0):  # 10, 101 과 같은 경우
                temp[1] += num_list[j]  # 1이 나올 횟수
            elif (j == 9):
                temp[8] += num_list[j]  # 8이 나올 횟수
            else:
                temp[j - 1] += num_list[j]  # N이 2인 경우에, 첫자리가 1일 떄 0, 2 ; 2일 때 1, 3 이런 경우
                temp[j + 1] += num_list[j]

        num_list = temp
    print(sum(num_list) % 1000000000)


if __name__ == '__main__':
    cal()

# https://pacific-ocean.tistory.com/151
# https://hwiyong.tistory.com/256
