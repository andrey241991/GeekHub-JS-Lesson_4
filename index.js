(function () {

   // provate folders with closures
    function User(name, age) {
        let _name = name;
        let _age = age;

        return {
            setName: function (name) {
                _name = name;
            },
            getName: function () {
                return _name;
            },
            setAge: function (age) {
                _age = age;
            },
            getAge: function () {
                return _age;
            }
        }
    }

    //custom forEach
    Array.prototype.foreach = function foreach(callback) {
        let currentValue = {};
        let array = this;
        let index = 0;
        for (let i = 0; i < this.length; i++) {
            index = i;
            currentValue = this[i];
            callback(index, currentValue, array);

        }
    }

    let array = [1, 2, 3];

    array.foreach(function (index, currentValue, array) {
        console.log('index', index);
        console.log('currentValue', currentValue);
        console.log('array', array);
    });


    //custom map
    Array.prototype.myMap = function myMap(callback) {
        let newArray = [];
        let currentValue = {};
        let array = this;
        let index = 0;
        for (let i = 0; i < this.length; i++) {
            index = i;
            currentValue = this[i];
            let result = callback(index, currentValue, array);
            newArray.push(result);
        }
        return newArray;
    }

    let array = [1, 2, 3];

    let newArray = array.myMap(function (index, currentValue, array) {
        return currentValue + 1;
    });


    //  custom sort
    function compare(a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }

    function mySort(array, compare) {
        for (let i = 0; i < array.length; i++) {
            let current = array[i];
            let next = array[i + 1];
            let result = compare(array[i], array[i + 1]);
            if (result === 1) {
                array[i] = next;
                array[i + 1] = current;
                i = -1;
            }
        }
    }
    let a = [3, 2, 1];
    mySort(a, compare);
});
