def bubble_sort(x):
    for size in reversed(range(len(x))):
        for i in range(size):
            if x[i] > x[i+1]:
                x[i], x[i+1] = x[i+1], x[i]


#  http://ejklike.github.io/2017/03/04/sorting-algorithms-with-python.html
if __name__ == '__main__':
    d = [2, 4, 5, 1, 3]
    bubble_sort(d)
    print(d)
