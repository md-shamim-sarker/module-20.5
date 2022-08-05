const myObj = {
    1: 'Shamim',
    2: 'Snigdha',
    3: 'Sneha'
};

const keys = Object.keys(myObj);
// console.log(keys);

// const values = Object.values(myObj);
// console.log(values);

for (let i = 0; i < keys.length; i++) {
    let propertyName = keys[i];
    let valueName = myObj[propertyName];
    console.log(propertyName, valueName);
}

console.log('---------------------------------')

for (const key in myObj) {
    if (Object.hasOwnProperty.call(myObj, key)) {
        const element = myObj[key];
        console.log(key, element);
    }
}

console.log('---------------------------------')

const array = [12, 13, 14];
array.forEach(element => {
    console.log(element);
});