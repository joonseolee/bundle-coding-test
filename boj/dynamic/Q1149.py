def cal():
    count = int(input())
    houses = [list(map(int, input().split())) for __a in range(count)]
    result = 0
    location = 5  # random
    for house in houses:
        now_location = house.index(min(house))
        if location == now_location:
            house[now_location] = 1001
            result = result + min(house)
            location = house.index(min(house))
        else:
            result = result + min(house)
            location = now_location
    print(result)


if __name__ == '__main__':
    cal()
