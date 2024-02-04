const arr = [1, 3, 4, 4, 5, 5, 1, 1, 3, 6, 8, 6];
const arr2 = [
    { a: 1, b: 2 },
    { b: 2, a: 1 },
    { a: 1, b: 2, c: { a: 1, b: 2 } },
    { b: 2, a: 1, c: { b: 2, a: 1 } }
];
const newArr = [...arr2];

// 辅助函数 判断是否为对象
const isObject = (val) => typeof val === 'object';

for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
        if (equals(newArr[i], newArr[j])) {
            newArr.splice(j, 1);
            j--;
        }
    }
}
console.log(newArr);

function equals(a, b) {
    // 判断是否是对象
    if (!(isObject(a) && isObject(b) && (a != null && b != null))) {
        return a === b;
    } else {
        // 如果是对象 则比较两个对象的属性名长度  长度不一致则肯定不相等
        const keys1 = Object.keys(a);
        const keys2 = Object.keys(b);
        if (keys1.length !== keys2.length) {
            return false;
        }
        // 如果长度相等则比较属性名
        for (var i = 0; i < keys1.length; i++) {
            // 比较属性名 属性名相同 则比较值
            if (!keys2.includes(keys1[i])) {
                // 属性名不同
                return false;
            } else {
                // if(a[keys1[i]] === b[keys1[i]]) {
                //     // 表示值相同
                //     return true;
                // }else {
                //     // 表示值不同
                //     return false;
                // }
                // 递归调用equals
                if (!equals(a[keys1[i]], b[keys1[i]])) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    }
}

// 以上代码是为了应对 当数组里面的元素是对象的情况  因为判断两个对象是否相等 不能简单的去使用set方法 set无法去重对象数组