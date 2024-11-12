def get_positive_integer(prompt):
    while True:
        try:
            value = int(input(prompt))
            if value >= 0:
                return value
            else:
                print("გთხოვთ, შეიყვანოთ დადებითი მთელი რიცხვი.")
        except ValueError:
            print("შეიყვანეთ რიცხვი.")

def main():
    age = get_positive_integer("შეიყვანეთ თქვენი ასაკი: ")
    experience = get_positive_integer("შეიყვანეთ თქვენი მართვის გამოცდილება (წლებში): ")

    if age < 18:
        print("თქვენ არ შეგიძლიათ მართვის მოწმობის მიღება, რადგან 18 წლამდე ხართ.")
    elif experience < 1:
        print("თქვენ უნდა გქონდეთ მინიმუმ 1 წლიანი მართვის გამოცდილება, რომ მიიღოთ მართვის მოწმობა.")
    else:
        print("თქვენ გაქვთ მართვის მოწმობის მიღების უფლება.")

if __name__ == "__main__":
    main()
