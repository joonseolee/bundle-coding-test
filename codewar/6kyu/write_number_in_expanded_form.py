"""
1. Question
expanded_form(12) # Should return '10 + 2'
expanded_form(42) # Should return '40 + 2'
expanded_form(70304) # Should return '70000 + 300 + 4'

2. Good
def expanded_form(num):
    num = list(str(num))
    return ' + '.join(x + '0' * (len(num) - y - 1) for y,x in enumerate(num) if x != '0')
"""


def expanded_form(num):
    num_list = list(str(num))
    result = []
    num_len = len(num_list)
    for a in num_list:
        num_len = num_len - 1
        if str(a) == "0":
            continue
        result.append(str(a) + "0"*num_len)
    return " + ".join(result)


if __name__ == "__main__":
    print(expanded_form(2032))
