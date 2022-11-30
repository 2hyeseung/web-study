// 구조 분해 할당


// 1. 배열 구조 분해
// - 순서가 중요
// - 변수의 순서와 요소의 순서가 일치해야 함
// - 없는 값은 undefined
// - 기본 값 설정 가능
const lists = ['apple','grape'];
// [item1, item2, item3 = 'peach'] = lists;
[item1, item2, item3] = lists;
console.log('item1 : ',item1);
console.log('item2 : ',item2);
console.log('item3 : ',item3);

// swap : 두 변수의 값 교환
let x = 1, y = 2;
[x,y]=[y,x];
console.log(x, y);


// 2. 객체 구조 분해
// - 키 값과 변수명 일치해야 함
// - 없는 키값을 변수로 받으면 undefined
const obj = {
    key1 : 'one',
    key2 : 'two',
};
const {key1, newKey1, key2, key3='three'} = obj;
console.log('key1 : ',key1);
console.log('newKey1 : ',newKey1);
console.log('key2 : ',key2);
console.log('key3 : ',key3);

const {a, b} = { a:10, b:20 };
console.log('a : ',a);
console.log('b : ',b);

const arr = ['a', 'b', 'c']
// [Before]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
// [After]
const [one, two, three] = arr;
console.log(one)
console.log(two)
console.log(three)
// [After2]
const [one2, two2, three2, four2 = 'hello'] = arr;
console.log(one2)
console.log(two2)
console.log(three2)
console.log(four2)

const TV = {
    name : 'samsung tv',
    price : 300,
    size : '76inch',
    store : 'samsung'
};
// [Before]
console.log(TV.name, TV.price, TV.size, TV.store);
console.log(TV['name'],TV['price'],TV['size'],TV['store']);
// [After]
let {name : TVname, price, size, store, owner='Sean'} = TV;
console.log(TVname, price, size, store, owner);

// spread 연산자
// : 값을 펼치는 연산자

// object
const defaultInfo = {
    price : 2000,
    store : 'cu',
}
const chocoIcecream = {
    ...defaultInfo,
    flavor : 'choco',
};
const starwberryIcecream = {
    ...defaultInfo,
    flavor : 'starwberry',
};
const mangoIcecream = {
    ...defaultInfo,
    flavor : 'mango',
};
console.log(chocoIcecream);
console.log(starwberryIcecream);
console.log(mangoIcecream);

// array
const nums1 = ['one','two','three'];
const nums2 = ['four','five','six'];
const nums = [...nums1, 'seven', ...nums2];
console.log(nums);
