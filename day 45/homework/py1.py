def categorize_age(age):
    if age < 0:
        return "არასწორი ასაკი"
    elif age < 13:
        return "ბავშვი"
    elif age < 18:
        return "თინეიჯერი"
    elif age < 60:
        return "ზრდასრული"
    else:
        return "ხანდაზმული"
user_age = int(input("შეიყვანეთ თქვენი ასაკი: "))
print("თქვენი ასაკობრივი კატეგორიაა:", categorize_age(user_age))
