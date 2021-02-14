import sys

# https://m.blog.naver.com/PostView.nhn?blogId=ndb796&logNo=221240660061&proxyReferer=https:%2F%2Fwww.google.com%2F 참고 

def cal():
    target = sys.stdin.readline()
    pattern = sys.stdin.readline().strip()
    kmp(target, pattern)

def make_table(pattern):
    pattern_size = len(pattern)
    table = [0 for _ in range(pattern_size)]
    j = 0

    for i in range(1, pattern_size):
        while j > 0 and pattern[i] != pattern[j]:
            j = table[j-1]
        if pattern[i] == pattern[j]:
            j += 1
            table[i] = j
    
    return table

def kmp(target, pattern):
    table = make_table(pattern)
    target_size = len(target)
    pattern_size = len(pattern)
    j = 0

    for i in range(target_size):
        while j > 0 and target[i] != pattern[j]:
            j = table[j - 1]
        if target[i] == pattern[j]:
            if j == pattern_size - 1:
                print("%d 번째에서 찾았다." % int(i - pattern_size + 2))
                j = table[j]
            else: j += 1
            


if __name__ == '__main__':
    cal()