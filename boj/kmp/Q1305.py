import sys

def cal():
    text_length = int(sys.stdin.readline())
    text = sys.stdin.readline().strip()
    table = [0 for _ in range(text_length)]
    j = 0

    for i in range(1, text_length):
        while j > 0 and text[i] != text[j]:
            j = table[j-1]
        if text[i] == text[j]:
            j += 1
            table[i] = j
    
    print(text_length - table[text_length - 1])


if __name__ == '__main__':
    cal()