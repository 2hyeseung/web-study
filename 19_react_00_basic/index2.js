// 클래스
// - 객체를 생성하는 템플릿

class Cat{
    // 생성자
    constructor(name, age){
        // 속성
        this.name = name;
        this.age = age;
    }

    // 메서드
    mew(){
        return this.name+' 야옹~';
    }
    eat(){
        return this.name+' 밥먹자!!';
    }
}

let navi = new Cat('나비',2);
let nyang = new Cat('냥이',3);
console.log(navi);
console.log(navi.mew());
console.log(navi.eat());
console.log(nyang);
console.log(nyang.mew());
console.log(nyang.eat());

// 연습
// Person 클래스
// - 속성 : 이름, 성별
// - 메서드 : study()
class Person{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
    study(){
        return this.name+' 공부하자!!';
    }
}
let minji = new Person('민지','female');
let minkyu = new Person('민규','male');
console.log(minji);
console.log(minji.study());
console.log(minkyu);
console.log(minkyu.study());