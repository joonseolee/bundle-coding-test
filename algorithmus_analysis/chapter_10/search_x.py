from random import *


def start():
    random_x = randint(0, 9)
    cnt = 0
    print("0부터 9까지의 숫자를 입력하세요")
    while True:
        cnt = cnt + 1
        print("[" + str(cnt) + "번째 도전] : ")
        x = int(input())
        if x == random_x:
            print("우와! 정확하다. " + str(cnt) + "번째 만에 맞췄군요")
            return
        elif x > random_x:
            print(str(x) + "보다 작습니다.")
            continue
        elif x < random_x:
            print(str(x) + "보다 큽니다.")
            continue


if __name__ == '__main__':
    start()
