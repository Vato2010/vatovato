def count_items(item_list, item):
    count = 0
    for i in item_list:
        if i == item:
            count += 1
    return count
