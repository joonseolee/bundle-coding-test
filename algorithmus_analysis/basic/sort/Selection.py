def selection_sort(x):
    for size in reversed(range(len(x))):
        max_i = 0
        for i in range(1, 1+size):
            if x[i] > x[max_i]:
                max_i = i
        x[max_i], x[size] = x[size], x[max_i]


if __name__ == '__main__':
    d = [2, 4, 5, 1, 3]
    selection_sort(d)
    print(d)
