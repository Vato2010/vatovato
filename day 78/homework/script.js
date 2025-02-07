function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("ორშაბათი");
            break;
        case 2:
            console.log("სამშაბათი");
            break;
        case 3:
            console.log("ოთხშაბათი");
            break;
        case 4:
            console.log("ხუთშაბათი");
            break;
        case 5:
            console.log("პარასკევი");
            break;
        case 6:
            console.log("შაბათი");
            break;
        case 7:
            console.log("კვირა");
            break;
        default:
            console.log("არასწორი დღე");}
    }
    function checkEvenOrOdd(number) {
        let result = (number % 2 === 0) ? "ლუწი" : "კენტი";
        console.log(result);
    }
    function getWeatherType(weatherNumber) {
        switch (weatherNumber) {
            case 1:
                console.log("მზიანი");
                break;
            case 2:
                console.log("წვიმიანი");
                break;
            case 3:
                console.log("მოღრუბლული");
                break;
            case 4:
                console.log("ქარიანი");
                break;
            default:
                console.log("არ არის დადგენილი");
        }
    }
    

