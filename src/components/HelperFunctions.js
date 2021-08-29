const makeEmptyStr = (num) => {
    let str = '';
    for (let i = 0; i < num; i++) {
        str += '\xa0';
    }
    return str;
};

const capitalize = (str) => {
    let arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    return str = arr.join('');
};

const arrObjCombiner = (arr1, arr2) => {
    return arr1.map((item, index) => { //arrays must be same len && the indexes must be obj
        return (
            {
                ...item,
                ...arr2[index],
            }
        )
    });
};

const removeFromArr = (array, childIDNum) => { //array of obj
    for (let i = 0; i < array.length; i++) {
        console.log(array.length, array[i].id, childIDNum);
        if (array[i].id === childIDNum) {
            array.splice(i, 1);
        }
    }
    return array;
};

const updateArrContent = (array, childIDNum, newCount) => { //arr of obj
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].id, childIDNum, newCount);
        if (array[i].id === childIDNum) {
            array[i].count = newCount;
        }
    }
    return array;
}

function getNthParent(elem, n) {
    return n === 0 ? elem : getNthParent(elem.parentNode, n - 1);
}

export { makeEmptyStr, capitalize, arrObjCombiner, removeFromArr, updateArrContent, getNthParent };