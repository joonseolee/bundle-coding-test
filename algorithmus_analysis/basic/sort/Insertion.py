def insert_sort(x):
    for size in range(1, len(x)):
        val = x[size]
        i = size
        while i > 0 and x[i-1] > val:
            x[i] = x[i-1]
            i -= 1
        x[i] = val


if __name__ == '__main__':
    d = [2, 4, 5, 1, 3]
    insert_sort(d)
    print(d)
