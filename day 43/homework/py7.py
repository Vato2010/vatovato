def reverse_list(items):
    reversed_list = []
    for i in range(len(items) - 1, -1, -1):
        reversed_list.append(items[i])
    return reversed_list

