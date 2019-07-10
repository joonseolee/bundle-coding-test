"""
1. Question
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

2. Good
def valid_parentheses(string):
    cnt = 0
    for char in string:
        if char == '(': cnt += 1
        if char == ')': cnt -= 1
        if cnt < 0: return False
    return True if cnt == 0 else False
"""


## 잘못된거
def valid_parentheses(string):
    string_list = list(string)
    x = [a for a in string_list if (ord(a) == 40 or ord(a) == 41)]
    while True:
        x = ''.join(x).replace("()", "")
        if len(x) == 1:
            return False
        if len(x) == 0:
            return True


if __name__ == "__main__":
    valid_parentheses("dfdfdf")
