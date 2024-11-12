def categorize_age(age):
    if age < 0:
        return "ასაკი ვერ შეიძლება იყოს ნეგატიური."
    elif age <= 12:
        return "თქვენი ასაკობრივი კატეგორია: ბავშვი."
    elif age <= 17:
        return "თქვენი ასაკობრივი კატეგორია: მოზარდი."
    elif age <= 64:
        return "თქვენი ასაკობრივი კატეგორია: ზრდასრული."
    else:
        return "თქვენი ასაკობრივი კატეგორია: ხანდაზმული."
try:
    user_age = int(input("შეიყვანეთ თქვენი ასაკი: "))
    message = categorize_age(user_age)
    print(message)
except ValueError:
    print("გთხოვთ, შეიყვანოთ სწორი რიცხვი.")
