import sys

def cal():
    _ = sys.stdin.readline()
    a_clock = [0] * 360000
    b_clock = [0] * 360000
    for index in sys.stdin.readline().strip().split(' '):
        a_clock[int(index)] = 1
    for index in sys.stdin.readline().strip().split(' '):
        b_clock[int(index)] = 1

    a_clock += a_clock
    b_clock_table = make_table(b_clock)
    a_clock_length = len(a_clock)
    j = 0

    for i in range(a_clock_length):
        while j > 0 and a_clock[i] != b_clock[j]:
            j = b_clock_table[j - 1]
        if a_clock[i] == b_clock[j]:
            if j == len(b_clock) - 1:
                print("possible")
                return
            else:
                j += 1

    print("impossible") 
    


def make_table(clock):
    clock_length = len(clock)
    table = [0] * clock_length
    j = 0

    for i in range(1, clock_length):
        while j > 0 and clock[i] != clock[j]:
            j = table[j - 1]
        if clock[i] == clock[j]:
            j += 1
            table[i] = j
    
    return table

if __name__ == '__main__':
    cal()
