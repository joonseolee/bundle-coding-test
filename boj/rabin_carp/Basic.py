import sys

# https://blog.encrypted.gg/857 참조 

def cal():
    target = sys.stdin.readline()
    pattern = sys.stdin.readline().strip()
    power = 0

    loop_length = len(target) - len(pattern) + 1
    target_hash = 0
    pattern_hash = 0
    for i in range(loop_length):
        if i == 0:
            for j in range(len(pattern)):
                target_hash = target_hash + ord(target[-(len(target) - len(pattern) + j + 1)]) * (2**power)
                pattern_hash = pattern_hash + ord(pattern[-(j + 1)]) * (2**power)
                if j < len(pattern) - 1:
                    power = power + 1
        else:
            target_hash = 2*(target_hash - ord(target[i - 1]) * (2**power)) + ord(target[len(pattern) - 1 + i])
        
        print(target_hash, pattern_hash)
        if target_hash == pattern_hash:
            print("wow!!!!!")


if __name__ == '__main__':
    cal()