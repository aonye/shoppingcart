const makeEmptyStr = (num) => {
    let str = '';
    for (let i = 0; i < num; i++) {
        str += '\xa0';
    }
    console.log(str);
    return str;
}

const capitalize = (str) => {
    let arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    return str = arr.join('');
}

export { makeEmptyStr, capitalize };