def ask_for_password(correct_password):
    while True:
        password = input("შეიყვანეთ პაროლი: ")
        if password == correct_password:
            print("პაროლი სწორი!")
            break
        else:
            print("პაროლი არასწორია, სცადეთ კიდევ.")

ask_for_password("12345")
