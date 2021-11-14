const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

average = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4;

function grade(average) {
    if (average >= 90 && average <=100) {
        return "Grade = A"
    } else if (average >=80 && average <= 89) {
        return "Grade = B"
    } else if (average >=70 && average <= 79) {
        return "Grade = C"
    } else if (average >=60 && average <= 69) {
        return "Grade = D"
    } else if (average >=0 && average <= 59) {
        return "Grade = E"
    }
}


console.log("Rata-rata = "+ average + "\n"
+ grade(average));


// use function

// const grades = [80, 90, 89, 69];

// console.log("Rata-rata = "+ avg(grades) + "\n"
// + grade(a));

// function avg(grades) {
//     const total = grades.reduce((x, y) => x + y);
//     return a = (total / grades.length);
    
//   }

// function grade(average) {
//     if (average >= 90 && average <=100) {
//         return "Grade = A"
//     } else if (average >=80 && average <= 89) {
//         return "Grade = B"
//     } else if (average >=70 && average <= 79) {
//         return "Grade = C"
//     } else if (average >=60 && average <= 69) {
//         return "Grade = D"
//     } else if (average >=0 && average <= 59) {
//         return "Grade = E"
//     }
// }
