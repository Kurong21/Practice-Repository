// 准备四张扑克牌
const poker = [1, 2, 3, 4];

// 将四张扑克牌对折撕掉 放在一起
let ripPoker = poker.concat(poker);

// 将牌堆顶数量为【名字字数】的牌移至牌堆底。
// 假设名字字数为2
var i = 0;
while (i < 7) {
    let newripPoker = ripPoker.shift();
    ripPoker.push(newripPoker);
    i++;
}

// 将前三张牌放在牌堆中间
const threePoker = ripPoker.splice(0, 3);
ripPoker.splice(2, 0, ...threePoker);
// 取出牌堆顶的牌，放置在一旁
const top = ripPoker.splice(0, 1);

// 取出牌堆顶的若干张牌插入牌堆中间，南方人取 1 张，北方人取 2 张，若不确定是南方人还是北方人取 3 张
// 假设是南方人取一张
var j = 0;
while (j < 1) {
    ripPoker.splice(3, 0, ...ripPoker.splice(0, 1));
    j++;
}

// 男生扔掉牌堆顶 1 张，女生扔掉牌堆顶 2 张
// 假设是男生
var k = 0;
while(k < 1) {
    ripPoker.shift();
    k++;
}

// 执行“见证奇迹的时刻”循环，每说一个字，就取出牌堆顶一张牌放置在牌堆底
for (var i = 0; i < 7; i++) {
    const p = ripPoker.splice(0, 1);
    ripPoker.push(...p);
}

// 好运留下来 烦恼丢出去
while (ripPoker.length > 1) {
    let luck = ripPoker.shift();
    ripPoker.push(luck);
    ripPoker.shift();
}

// 最后比较 如果相同就是成功  不同则是失败
if (top[0] === ripPoker[0]) {
    console.log("成功！");
    console.log(`剩下的牌是：${ripPoker[0]}`);
    console.log(`藏的牌是：${top[0]}`);
} else {
    console.log("失败！");
    console.log(`剩下的牌是：${ripPoker[0]}`);
    console.log(`藏的牌是：${top[0]}`);
}
