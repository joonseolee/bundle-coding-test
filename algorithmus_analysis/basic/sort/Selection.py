def sel_sort(a):
    max_idx = len(a)
    for i in range(max_idx-1):
        min_idx = i
        for j in range(i + 1, max_idx):
            if a[j] < a[min_idx]:
                min_idx = j
        a[i], a[min_idx] = a[min_idx], a[i]
        print(a)  # 정렬 과정 출력하기


if __name__ == '__main__':
    d = [2, 4, 5, 1, 3]
    sel_sort(d)
    print(d)
