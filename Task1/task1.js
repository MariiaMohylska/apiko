let Students = [{ firstName: 'Dmytro', secondName: 'Shyndor', ratting: 86 },
{ firstName: 'Vitalii', secondName: 'Berkyta', ratting: 80 },
{ firstName: 'Roman', secondName: 'Tymchuk', ratting: 90 },
{ firstName: 'Vadym', secondName: 'Vitenko', ratting: 60 },
{ firstName: 'Mariia', secondName: 'Mohylska', ratting: 93 },
{ firstName: 'Andrii', secondName: 'Hrynkiv', ratting: 92 },
{ firstName: 'Roman', secondName: 'Ivanystskyi', ratting: 72 },
{ firstName: 'Nazarii', secondName: 'Kosiuk', ratting: 69 },
{ firstName: 'Nazar', secondName: 'Lepak', ratting: 60 },
{ firstName: 'Serhii', secondName: 'Barida', ratting: 79 },
{ firstName: 'Bohdan', secondName: 'Lypak', ratting: 60 },
{ firstName: 'Yurii', secondName: 'Mishutkin', ratting: 74 },
{ firstName: 'Volodymyr', secondName: 'Perestiuk', ratting: 60 },
{ firstName: 'Kostiantyn', secondName: 'Bova', ratting: 60 },
{ firstName: 'Vladyslav', secondName: 'Semchyshyn', ratting: 90 },
{ firstName: 'Nazar', secondName: 'Sydiaha', ratting: 60 },
{ firstName: 'Dmytro', secondName: 'Fil', ratting: 82 },
{ firstName: 'Artem', secondName: 'Krupnyk', ratting: 88 },
{ firstName: 'Nazarii', secondName: 'Chornyi', ratting: 84 },
{ firstName: 'Sviatoslav', secondName: 'Vasyliv', ratting: 73 }];

let result = document.getElementById('result');

function sortSurname() {
    Students.sort(function (a, b) {
        let nameA = a.secondName.toUpperCase();
        let nameB = b.secondName.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });
};

function SortAndShowSurname() {
    result.innerHTML = "";
    sortSurname();
    Students.forEach(function (element) {
        let s = element.firstName + '   ' + element.secondName;
        result.innerHTML += s;
        result.innerHTML += " <br>";
    });
};
function SortAndShowRatting() {
    result.innerHTML = '';
    sortRatting();
    Students.forEach(function (element) {
        let s = element.ratting + '  &nbsp;&nbsp;&nbsp;&nbsp; ' + element.firstName + '   ' + element.secondName + ' ';
        result.innerHTML += s;
        result.innerHTML += " <br>";
    });
}
function showNewStudents(n) {
    document.write(newStudent[n].firstName + "   " + newStudent[n].secondName + "   " + newStudent[n].ratting + "   " + newStudent[n].rate + "%");
    document.write('<br>');
    document.write('<hr>');
};

function sortRatting() {
    Students.sort(function (a, b) {
        let nameA = a.ratting;
        let nameB = b.ratting;
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });
}
let s, mark;
function worstStudent() {
    sortRatting();
    result.innerHTML = '';
    mark = Students[0].ratting;
    s = Students[0].firstName + '  ' + Students[0].secondName;
    for (let i = 1; i < Students.length; i++) {
        if (Students[i].ratting > Students[0].ratting) {
            break;
        } else {
            s = s + ", " + Students[i].firstName + "   " + Students[i].secondName;
        }
    }
    result.innerHTML = "Студент(-и) з найменшою оцінкою: " + mark + "  "+  s;
}
function bestStudent() {
    result.innerHTML = '';
    sortRatting();
    mark = Students[Students.length - 1].ratting;
    s = Students[Students.length - 1].firstName + '  ' + Students[Students.length - 1].secondName;
    for (let i = Students.length - 2; i > 0; i--) {
        if (Students[i].ratting < Students[Students.length - 1].ratting) {
            break;
        } else {
            s = s + ", " + Students[i].firstName + "   " + Students[i].secondName;
        }
    }
    result.innerHTML = "Студент(-и) з найбільшою оцінкою: " + mark + "  "+  s;
}
function avrgStudent() {
    result.innerHTML = '';
    let avrgSum = 0;
    for (let i = 0; i < Students.length; i++) {
        avrgSum = avrgSum + Students[i].ratting;
    }
    avrgSum = avrgSum / 20;
    avrgId = 0;
    temp = Math.abs(Students[0].ratting - avrgSum);
    for (let i = 0; i < Students.length; i++) {
        temp1 = Math.abs(avrgSum - Students[i].ratting);
        if (temp1 <= temp) {
            temp = temp1;
            avrgId = i;
        }
    }
    result.innerHTML = "Студент із середньою оцінкою: " + "  " + Students[avrgId].ratting +"  <br>"+   Students[avrgId].firstName + "   " + Students[avrgId].secondName;

}

function Rate() {
    let maxRatting = 0;
    sortRatting();
    maxRatting = Students[Students.length - 1].ratting;
    sortSurname();
    let newStudent = Students;
    result.innerHTML = '';
    for (let i = 0; i < Students.length; i++) {
        newStudent[i].rate = (100 - (newStudent[i].ratting / maxRatting) * 100).toFixed(1);
        result.innerHTML += newStudent[i].rate + '%' +"  ——  "+   newStudent[i].firstName + ' ' + newStudent[i].secondName;
        result.innerHTML += '<br>'
    }
}

function Password() {
    result.innerHTML = '';
    let length = document.getElementById('passwordCharNum').value;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const num = "0123456789"
    const symb = "~!@#$%^&*()_-+[]{}"
    let password = ""
    let c=0, s=0, n=0;
    c = Math.floor(length * 0.6); 
    
    if (document.getElementById("CharsSymbols").checked) {
        s = Math.ceil(length * 0.1);
    }
    if (document.getElementById("CharsNumbers").checked){
       n = length - c - s; 
    }    
    let tempS = '';
    for (let i = 0, j = chars.length; i < c; i++) {
        tempS += chars.charAt(Math.floor(Math.random() * j));
    }
    for (let i = 0, j = symb.length; i < s; i++) {
        tempS += symb.charAt(Math.floor(Math.random() * j));
    }
    for (let i = 0, j = num.length; i < n; i++) {
        tempS += num.charAt(Math.floor(Math.random() * j));
    }
    for (let i = 0, j = tempS.length; i < length; i++) {
        password += tempS.charAt(Math.floor(Math.random() * j));
    }
result.innerHTML += password;
}