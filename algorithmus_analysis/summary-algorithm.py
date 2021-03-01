import turtle as t

def sum_n(n):
    return n * (n + 1) // 2

def fact(n):
    if n <= 1:
        return 1
    return n * fact(n - 1)

def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

def diamondPaint(diamond):
    if diamond % 2 == 1:
        i = 1
    else :
        i = 2


    while i < diamond:
        blank = ' '*((diamond-i)//2)
        star = '*'*i
        print(blank, star)

        i += 2
        
    while i > 0:
        blank = ' '*((diamond-i)//2)
        star = '*'*i
        print(blank, star)
        
        i -= 2

# 쉽게 설명한 병합정렬 알고리즘
def easy_merge_sort(a):
    n = len(a)

    if n <= 1:
        return a

    mid = n // 2
    g1 = easy_merge_sort(a[:mid])
    g2 = easy_merge_sort(a[mid:])

    result = []
    while g1 and g2:
        if g1[0] < g2[0]:
            result.append(g1.pop(0))
        else:
            result.append(g2.pop(0))
    
    while g1:
        result.append(g1.pop(0))
    while g2:
        result.append(g2.pop(0))
    return result

# 일반적인 병합정렬
def general_merge_sort(a):
    n = len(a)

    if n <= 1:
        return
    
    mid = n // 2
    g1 = a[:mid]
    g2 = a[mid:]
    general_merge_sort(g1)
    general_merge_sort(g2)

    i1 = 0
    i2 = 0
    ia = 0

    while i1 < len(g1) and i2 < len(g2):
        if g1[i1] < g2[i2]:
            a[ia] = g1[i1]
            i1 += 1
            ia += 1
        else:
            a[ia] = g2[i2]
            i2 += 1
            ia += 1
    
    while i1 < len(g1):
        a[ia] = g1[i1]
        i1 += 1
        ia += 1
    while i2 < len(g2):
        a[ia] = g2[i2]
        i2 += 1
        ia += 1
    return a

# 쉽게 설명한 퀵정렬
def easy_quick_sort(a):
    n = len(a)

    if n <= 1:
        return a
    
    pivot = a[-1]
    g1 = []
    g2 = []
    for i in range(0, n - 1):
        if a[i] < pivot:
            g1.append(a[i])
        else:
            g2.append(a[i])
    return easy_quick_sort(g1) + [pivot] + easy_quick_sort(g2)

# 일반적인 퀵 정렬 
def general_quick_sort(a):
    _general_quick_sort(a, 0, len(a) - 1)
    print(a)

def _general_quick_sort(a, start, end):
    if end - start <= 0:
        return
    pivot = a[end]
    i = start
    
    for j in range(start, end):
        if a[j] <= pivot:
            a[i], a[j] = a[j], a[i]
            i += 1
    a[i], a[end] = a[end], a[i]
    _general_quick_sort(a, start, i - 1)
    _general_quick_sort(a, i + 1, end)

# 이분탐색 
def binary_search(a, x):
    start = 0
    end = len(a) - 1

    while start <= end:
        mid = (start + end) // 2
        if x == a[mid]:
            return a[mid]
        elif x > a[mid]:
            start = mid + 1
        else:
            end = mid - 1
    
    return -1

# 회문 찾기
# 이 방식으로 하면 queue 가 비효율적이기때문에
# form collections import deque 사용바람.
def palindrome(s):
    qu = []
    st = []
    for x in s:
        if x.isalpha():
            qu.append(x.lower())
            st.append(x.lower())
    
    while qu:
        if (qu.pop(0) != st.pop()):
            return False
    
    return True

# 사각나선 그리기
def spiral(sp_len):
    if sp_len <= 5:
        return
    t.forward(sp_len)
    t.right(90)
    spiral(sp_len - 5)

# 삼각형 그리기
def tri(tri_len):
    if tri_len <= 10:
        for i in range(0, 3):
            t.forward(tri_len)
            t.left(120)
        return
    new_len = tri_len / 2
    tri(new_len)
    t.forward(new_len)
    tri(new_len)
    t.backward(new_len)
    t.left(60)
    t.forward(new_len)
    t.right(60)
    tri(new_len)
    t.left(60)
    t.backward(new_len)
    t.right(60)

# 나무그리기 
def tree(br_len):
    if br_len <= 5:
        return
    new_len = br_len * 0.7
    t.forward(br_len)
    t.right(20)
    tree(new_len)
    t.left(40)
    tree(new_len)
    t.right(20)
    t.backward(br_len)

# 눈꽃그리기
def snow_line(snow_len):
    if snow_len <= 10:
        t.forward(snow_len)
        return
    new_len = snow_len / 3
    snow_line(new_len)
    t.left(60)
    snow_line(new_len)
    t.right(120)
    snow_line(new_len)
    t.left(60)
    snow_line(new_len)


if __name__ == '__main__':
    # print(binary_search([1,2,3,4,5,6,7,8,9,10], 4))
    # print(general_quick_sort([6,8,3,9,10,1,2,4,7,5]))
    # print(palindrome("mom"))

    # 사각나선 그리기
    # t.speed(0)
    # spiral(200)
    # t.hideturtle()
    # t.done()

    # 삼각형 그리기
    # t.speed(0)
    # tri(160)
    # t.hideturtle()
    # t.done()

    # 나무그리기 
    # t.speed(0)
    # t.left(90)
    # tree(70)
    # t.hideturtle()
    # t.done()

    # 눈꽃그리기 
    t.speed(0)
    snow_line(150)
    t.right(120)
    snow_line(150)
    t.right(120)
    snow_line(150)
    t.hideturtle()
    t.done()
    
