"""
1. Question
likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

2. Good
def likes(names):
    n = len(names)
    return {
        0: 'no one likes this',
        1: '{} likes this',
        2: '{} and {} like this',
        3: '{}, {} and {} like this',
        4: '{}, {} and {others} others like this'
    }[min(4, n)].format(*names[:3], others=n-2)
"""


def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return "{} likes this".format(*names)
    elif len(names) == 2:
        return "{} and {} like this".format(*names)
    elif len(names) == 3:
        return "{}, {} and {} like this".format(*names)
    else:
        return "{}, {} and".format(*names) + " " + str(len(names)-2) + " others like this"


if __name__ == '__main__':
    print(likes([]))
