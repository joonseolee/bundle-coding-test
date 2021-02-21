import sys

def cal():
    text = sys.stdin.readline().strip()
    pattern = sys.stdin.readline().strip()

    if text == pattern:
        print(1)
        return

    table = make_table(pattern)
    j = 0
    text_length = len(text)
    pattern_length = len(pattern)

    for i in range(1, text_length):
        while j > 0 and text[i] != pattern[j]:
            j = table[j - 1]
        if text[i] == pattern[j]:
            if j == pattern_length - 1:
                print(1)
                return
            else: 
                j += 1
    
    print(0)
            

def make_table(text):
    text_length = len(text)
    table = [0] * text_length
    j = 0

    for i in range(1, text_length):
        while j > 0 and text[i] != text[j]:
            j = table[j - 1]
        if text[i] == text[j]:
            j += 1
            table[i] = j
    
    return table


if __name__ == '__main__':
    cal()
