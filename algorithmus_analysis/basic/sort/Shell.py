def gap_insert_sort(x, start, gap):
    for target in range(start + gap, len(x), gap):
        val = x[target]
        i = target
        while i > start:
            if x[i - gap] > val:
                x[i] = x[i - gap]
            else:
                break
            i -= gap
        x[i] = val


def shell_sort(x):
    gap = len(x) // 2
    while gap > 0:
        for start in range(gap):
            gap_insert_sort(x, start, gap)
        gap = gap // 2


if __name__ == '__main__':
    d = [2, 4, 5, 1, 3]
    shell_sort(d)
    print(d)
