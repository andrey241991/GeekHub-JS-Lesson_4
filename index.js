(function () {

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



});