import copy


def cal():
    h, v = map(int, input().split())
    lights = [list(map(int, input().split())) for _ in range(h)]

    light_on_count = 0
    light_off_count = 0
    light_on = copy.deepcopy(lights)
    light_off = copy.deepcopy(lights)
    stack = []

    for i in range(h):
        for j in range(v):
            if light_on[i][j] == 0:
                stack.append((i, j))
                while stack:
                    _cal_on(stack, v, h, light_on)
                light_on_count += 1

    for i in range(h):
        for j in range(v):
            if light_off[i][j] == 1:
                stack.append((i, j))
                while stack:
                    _cal_off(stack, v, h, light_off)
                light_off_count += 1

    print(light_on_count)
    print(light_off_count)


def _cal_on(stack, v, h, light_on):
    x, y = stack.pop()
    if 0 > x or x >= h or 0 > y or y >= v:
        return
    if 0 == light_on[x][y]:
        stack.append((x - 1, y))
        stack.append((x + 1, y))
        stack.append((x, y - 1))
        stack.append((x, y + 1))
        light_on[x][y] = 1


def _cal_off(stack, v, h, light_off):
    x, y = stack.pop()
    if 0 > x or x >= h or 0 > y or y >= v:
        return
    if 1 == light_off[x][y]:
        stack.append((x - 1, y))
        stack.append((x + 1, y))
        stack.append((x, y - 1))
        stack.append((x, y + 1))
        light_off[x][y] = 0


if __name__ == '__main__':
    cal()
