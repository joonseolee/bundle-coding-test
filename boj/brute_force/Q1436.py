def cal():
    cnt = int(input())
    number = 666
    if cnt == 1:
        print(number)
        return
    while 1:
        number += 1
        if '666' in str(number):
            cnt -= 1
        if cnt == 1:
            print(number)
            return


if __name__ == '__main__':
    cal()
