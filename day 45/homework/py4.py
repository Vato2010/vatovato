def count_unique_characters(text):
    unique_characters = set(text)  
    return len(unique_characters)  
text = "გამარჯობა"
unique_count = count_unique_characters(text)
print("ასობგერების რაოდენობა:", unique_count)
