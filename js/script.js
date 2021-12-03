let object1 = {
    k1: 1,
    k2: 2,
    k3: 3,
    k4: {
        v1: 11,
        v2: 12
    },
    k5: 5
};

let object2 = {
    k1: 1,
    k2: 2,
    k3: 3,
    k4: {
        v1: 11,
        v2: 12
    },
    k5: 5
};

let object3 = {
    k1: 1,
    k2: 2,
    k3: 3,
    k4: {
        v1: 11,
        v2: 12,
        v2: 122,
    },
    k5: 5
};

function deepEqual(obj1, obj2) {
    let check = true;

    function equalObj(obj1, obj2) {
        // Массивы ключей
        let arr1 = Object.keys(obj1);
        let arr2 = Object.keys(obj2);

        // Функции для проверки ключей, значений и типов
        function checkKey(item1, item2) {
            if (item1 == item2) {
                return true;
            } else {
                return false;
            }
        }
        function checkValue(item1, item2) {
            if (item1 == item2) {
                return true;
            } else {
                return false;
            }
        }
        function checkType(item1, item2) {
            if (typeof item1 == "object") {
                return true;
            } else {
                return false;
            }
        }

        if (arr1.length == arr2.length) {
            check = true;
        } else {
            check = false;
        }

        // Цикл для проверки значений по одному
        for (let i = 0; i < arr1.length; i++) {
            // Проверка ключей
            if (checkKey(arr1[i], arr2[i])) {
                // console.log(`Ключи ${arr1[i]} и ${arr2[i]} одинаковы`);
                // Проверка типа данных
                if (checkType(obj1[arr1[i]], obj2[arr2[i]])) {
                    // console.log(`Тип данных ${obj1[arr1[i]]} и ${obj2[arr2[i]]} "Объект"`);
                    equalObj(obj1[arr1[i]], obj2[arr2[i]]);
                } else {
                    // console.log(`Тип данных ${obj1[arr1[i]]} и ${obj2[arr2[i]]} не "Объект"`);
                    // Проверка значений
                    if (checkValue(obj1[arr1[i]], obj2[arr2[i]])) {
                        // console.log(`Значения ${obj1[arr1[i]]} и ${obj2[arr2[i]]} одинаковы`);
                    } else {
                        // console.log(`Значения ${obj1[arr1[i]]} и ${obj2[arr2[i]]} не одинаковы`);
                        check = false;
                    }
                }
            } else {
                // console.log(`Ключи ${arr1[i]} и ${arr2[i]} не одинаковы`);
                check = false;
            }
        }
        // console.log(check);
    }

    equalObj(obj1, obj2);
    return check;
}

// Запуск функции
console.log(deepEqual(object1, object2));
console.log(deepEqual(object1, object3));