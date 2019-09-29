#  O(n)
def sequential_option1(s, key):
    i = 0
    while i < len(s):
        if s[i] is key:
            return True
        i = i + 1
    return None


def sequential_option2(s, key):
    for idx, value in enumerate(s):
        if value is key:
            return True
    return None


#  O(log n)
def binary_option1(target, start, end, data):
    if start > end:
        return None

    mid = (start + end) // 2

    if data[mid] == target:
        return mid
    elif data[mid] > target:
        end = mid - 1
    else:
        start = mid + 1
    return binary_option1(target, start, end, data)


if __name__ == '__main__':
    s = [1, 2, 3, 4, 7, 9, 10]
    print(sequential_option1(s, 4))
    print(sequential_option2(s, 11))

    print(binary_option1(4, 0, 10, s))
