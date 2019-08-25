def start():
    option = str(input())
    if option == 'A' or 'B':
        return
    num = input()
    if option == 'A':
        print(format(int(num), 'x'))
    else:
        print(int(num, 16))


if __name__ == '__main__':
    start()
