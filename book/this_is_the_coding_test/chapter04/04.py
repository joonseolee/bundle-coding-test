import sys

const_column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
steps = [(-2, -1), (-1, -2), (1, -2), (2, -1),
         (2, 1), (1, 2), (-1, 2), (-2, 1)]


def cal():
    column, row = list(sys.stdin.readline().strip())
    column = const_column.index(column) + 1
    row = int(row)
    count = 0

    for step in steps:
        i_row = row + step[0]
        i_column = column + step[1]

        if i_row < 1 or i_row > 8 or i_column < 1 or i_column > 8:
            continue
        count += 1

    print(count)


if __name__ == '__main__':
    cal()
