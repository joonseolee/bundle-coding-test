import sys

def cal():
    text = sys.stdin.readline()
    keyword = sys.stdin.readline().strip()

    keyword_table = make_table(keyword)
    text_length = len(text)
    j = 0

    for i in range(text_length):
        if text[i].isnumeric():
            continue
        if j > 0 and text[i] != keyword[j]:
            j = keyword_table[j - 1]
        if text[i] == keyword[j]:
            if j == len(keyword) - 1:
                print("1")
                return
            else:
                j += 1
    
    print("0")

def make_table(keyword):
    keyword_length = len(keyword)
    table = [0] * keyword_length
    j = 0

    for i in range(1, keyword_length):
        if j > 0 and keyword[i] != keyword[j]:
            j = table[j - 1]
        if keyword[i] == keyword[j]:
            j += 1
            table[i] = j
    
    return table


if __name__ == '__main__':
    cal()
