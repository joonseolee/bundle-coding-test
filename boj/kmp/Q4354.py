# https://deque.tistory.com/81 참고 
# 실패함수의 마지막부분이 반복될수있는 문자열의 최대길이인것을 알고있었지만 최소길이를 생각하지못함.
# 이 문제는 kmp 에 대해 잘 이해하고 있는지 응용할수있는지 여부 확인 가능한듯 

import sys

def cal():
    string_list = []
    for _ in range(10):
        text = sys.stdin.readline().strip()
        if text == ".":
            break
        string_list.append(text)
    
    for text in string_list:
        make_table(text)
    
def make_table(text):
    text_length = len(text)
    table = [0] * text_length
    j = 0

    for i in range(1, text_length):
        while j > 0 and text[i] != text[j]:
            j = table[j-1]
        if text[i] == text[j]:
            j += 1
            table[i] = j
    
    pattern_length = text_length - table[text_length - 1]
    if text_length % pattern_length == 0:
        print(text_length // pattern_length)
    else:
        print(1)


if __name__ == "__main__":
    cal()