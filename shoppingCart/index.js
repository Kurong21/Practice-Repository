<<<<<<< HEAD

// 创建一个 单个商品 的类
class UlGoods {
    constructor(g) {
        this.data = g;
        this.choose = 0;
    }

    // 是否选中了此商品
    isChoose() {
        return this.choose > 0;
    }

    // 增加该商品数量
    increase() {
        // 商品选择数量大于库存后不再添加
        if (this.choose >= this.data.instock) {
            return;
        }
        this.choose++;
    }

    // 减少商品数量
    decrease() {
        // 商品数量减少到零后不再减少
        if (this.choose <= 0) {
            return;
        }
        this.choose--;
    }

    // 计算一个商品的总价
    getTotalPrice() {
        return this.data.price * this.choose;
    }
}

// 创建一个 包含整个页面数据 的类
class UlData {
    constructor() {
        let res = [];
        goods.forEach(item => {
            var data = new UlGoods(item);
            res.push(data);
        });
        this.uiGoods = res;
        this.deliveryThreshold = 30;
        this.deliveryFee = 5;
    }

    // 增加某一个商品的数量
    increase(index) {
        // if (this.uiGoods[index].choose >= this.uiGoods[index].data.instock) {
        //     return;
        // }
        // this.uiGoods[index].choose++;
        this.uiGoods[index].increase();
    }

    // 减少某一个商品的数量
    decrease(index) {
        // if (this.uiGoods[index].choose <= 0) {
        //     return;
        // }
        // this.uiGoods[index].choose--;
        this.uiGoods[index].decrease();
    }

    // 计算购物车中所有商品的总价
    getTotalPrice() {
        let sum = 0;
        this.uiGoods.forEach(item => { sum += item.getTotalPrice() });
        return sum.toFixed(2);
    }

    // 判断是否选中了商品
    isChoose(index) {
        return this.uiGoods[index].isChoose();
    }

    // 判断购物车中有无商品
    // hasGoodsInCart() {
    //     let sum = 0;
    //     this.uiGoods.forEach(item => { sum += item.choose });
    //     return sum > 0;
    // }

    // 是否达到最低配送标准
    isOverdeliveryThreshold() {
        return this.getTotalPrice() >= this.deliveryThreshold;
    }

    // 计算还差多少元起送
    getDifference() {
        return this.getTotalPrice() === 0 ? 0 : this.deliveryThreshold - (+this.getTotalPrice() + this.deliveryFee);
    }
}

const uid = new UlData();

// 页面封装对象
class Ul {
    constructor() {
        this.interfaceData = new UlData();
        this.doms = {
            domContainer: document.querySelector('.container'),
            goodsList: document.querySelector('.goods-list'),
            price: document.querySelector('.footer-car-price'),
            difference: document.querySelector('.footer-pay'),
        };
        this.rendering();
    }

    // 渲染商品的函数
    rendering() {
        this.doms.goodsList.innerHTML = this.interfaceData.uiGoods.map((item, index) => {
            return `
            <div class="goods-item">
                    <img src="${item.data.pic}" class="item-img">
                    <div class="goods-info">
                        <h2 class="title">${item.data.title}</h2>
                        <p class="desc">${item.data.desc}</p>
                        <p class="rating">剩余量:${item.data.instock} 好评率${item.data.favorRate}%</p>
                        <div class="goods-confirm">
                            <span class="price">￥${item.data.price}</span>
                            <div class="goods-btns">
                                <div data-index=${index} class="iconfont i-jiahao show">-</div>
                                <span>${item.choose}</span>
                                <div data-index=${index} class="iconfont i-jiajianzujianjiahao">+</div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }).join('');
    }

    // 增加商品
    increase(index) {
        this.interfaceData.increase(index);
        // 更新显示
        this.updateGoodsItem(index);
        this.updatFooter();
    }

    // 减少商品
    decrease(index) {
        this.interfaceData.decrease(index);
        this.updateGoodsItem(index);
        this.updatFooter();
    }
    // 更新某个商品的显示状态
    updateGoodsItem(index) {
        var item = this.doms.goodsList.children[index];
        if (this.interfaceData.uiGoods[index].isChoose(index)) {
            item.querySelector('.goods-btns .iconfont').classList.remove('show');
        } else {
            item.querySelector('.goods-btns .iconfont').classList.add('show');
        }
        item.querySelector('.goods-btns span').textContent = this.interfaceData.uiGoods[index].choose;
    }

    // 更新底部购物车状态
    updatFooter() {
        // 判断是否超过起送门槛
        const go = this.doms.difference;
        const difference = this.interfaceData.getDifference().toFixed(0);
        if (this.interfaceData.isOverdeliveryThreshold()) {
            go.classList.add('delivery');
            go.textContent = "去结算";
        }else {
            go.classList.remove('delivery');
            go.textContent = `还差￥${difference}元起送`;
        }
        this.doms.price.textContent = `￥${this.interfaceData.getTotalPrice()}`;
    }
}

const ul = new Ul();
// 获取点击的商品index 使用事件委托
ul.doms.domContainer.addEventListener('click', (e) => {
    var index = e.target.getAttribute('data-index');
    // 判断是增加还是减少
    if (e.target.classList.contains('i-jiajianzujianjiahao')) {
        ul.increase(index);
    } else if (e.target.classList.contains('i-jiahao')) {
        ul.decrease(index);
    }
},);

// 总的来说：一共使用了3个类(原始数据  商品数据  界面数据) 将数据相互隔离，在改动数据的时候并没有改动原始数据
// 这样做保护了原始数据 将来在其他地方使用相同的原始数据时 彼此之间不受影响

=======

// 创建一个 单个商品 的类
class UlGoods {
    constructor(g) {
        this.data = g;
        this.choose = 0;
    }

    // 是否选中了此商品
    isChoose() {
        return this.choose > 0;
    }

    // 增加该商品数量
    increase() {
        // 商品选择数量大于库存后不再添加
        if (this.choose >= this.data.instock) {
            return;
        }
        this.choose++;
    }

    // 减少商品数量
    decrease() {
        // 商品数量减少到零后不再减少
        if (this.choose <= 0) {
            return;
        }
        this.choose--;
    }

    // 计算一个商品的总价
    getTotalPrice() {
        return this.data.price * this.choose;
    }
}

// 创建一个 包含整个页面数据 的类
class UlData {
    constructor() {
        let res = [];
        goods.forEach(item => {
            var data = new UlGoods(item);
            res.push(data);
        });
        this.uiGoods = res;
        this.deliveryThreshold = 30;
        this.deliveryFee = 5;
    }

    // 增加某一个商品的数量
    increase(index) {
        // if (this.uiGoods[index].choose >= this.uiGoods[index].data.instock) {
        //     return;
        // }
        // this.uiGoods[index].choose++;
        this.uiGoods[index].increase();
    }

    // 减少某一个商品的数量
    decrease(index) {
        // if (this.uiGoods[index].choose <= 0) {
        //     return;
        // }
        // this.uiGoods[index].choose--;
        this.uiGoods[index].decrease();
    }

    // 计算购物车中所有商品的总价
    getTotalPrice() {
        let sum = 0;
        this.uiGoods.forEach(item => { sum += item.getTotalPrice() });
        return sum.toFixed(2);
    }

    // 判断是否选中了商品
    isChoose(index) {
        return this.uiGoods[index].isChoose();
    }

    // 判断购物车中有无商品
    // hasGoodsInCart() {
    //     let sum = 0;
    //     this.uiGoods.forEach(item => { sum += item.choose });
    //     return sum > 0;
    // }

    // 是否达到最低配送标准
    isOverdeliveryThreshold() {
        return this.getTotalPrice() >= this.deliveryThreshold;
    }

    // 计算还差多少元起送
    getDifference() {
        return this.getTotalPrice() === 0 ? 0 : this.deliveryThreshold - (+this.getTotalPrice() + this.deliveryFee);
    }
}

const uid = new UlData();

// 页面封装对象
class Ul {
    constructor() {
        this.interfaceData = new UlData();
        this.doms = {
            domContainer: document.querySelector('.container'),
            goodsList: document.querySelector('.goods-list'),
            price: document.querySelector('.footer-car-price'),
            difference: document.querySelector('.footer-pay'),
        };
        this.rendering();
    }

    // 渲染商品的函数
    rendering() {
        this.doms.goodsList.innerHTML = this.interfaceData.uiGoods.map((item, index) => {
            return `
            <div class="goods-item">
                    <img src="${item.data.pic}" class="item-img">
                    <div class="goods-info">
                        <h2 class="title">${item.data.title}</h2>
                        <p class="desc">${item.data.desc}</p>
                        <p class="rating">剩余量:${item.data.instock} 好评率${item.data.favorRate}%</p>
                        <div class="goods-confirm">
                            <span class="price">￥${item.data.price}</span>
                            <div class="goods-btns">
                                <div data-index=${index} class="iconfont i-jiahao show">-</div>
                                <span>${item.choose}</span>
                                <div data-index=${index} class="iconfont i-jiajianzujianjiahao">+</div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }).join('');
    }

    // 增加商品
    increase(index) {
        this.interfaceData.increase(index);
        // 更新显示
        this.updateGoodsItem(index);
        this.updatFooter();
    }

    // 减少商品
    decrease(index) {
        this.interfaceData.decrease(index);
        this.updateGoodsItem(index);
        this.updatFooter();
    }
    // 更新某个商品的显示状态
    updateGoodsItem(index) {
        var item = this.doms.goodsList.children[index];
        if (this.interfaceData.uiGoods[index].isChoose(index)) {
            item.querySelector('.goods-btns .iconfont').classList.remove('show');
        } else {
            item.querySelector('.goods-btns .iconfont').classList.add('show');
        }
        item.querySelector('.goods-btns span').textContent = this.interfaceData.uiGoods[index].choose;
    }

    // 更新底部购物车状态
    updatFooter() {
        // 判断是否超过起送门槛
        const go = this.doms.difference;
        const difference = this.interfaceData.getDifference().toFixed(0);
        if (this.interfaceData.isOverdeliveryThreshold()) {
            go.classList.add('delivery');
            go.textContent = "去结算";
        }else {
            go.classList.remove('delivery');
            go.textContent = `还差￥${difference}元起送`;
        }
        this.doms.price.textContent = `￥${this.interfaceData.getTotalPrice()}`;
    }
}

const ul = new Ul();
// 获取点击的商品index 使用事件委托
ul.doms.domContainer.addEventListener('click', (e) => {
    var index = e.target.getAttribute('data-index');
    // 判断是增加还是减少
    if (e.target.classList.contains('i-jiajianzujianjiahao')) {
        ul.increase(index);
    } else if (e.target.classList.contains('i-jiahao')) {
        ul.decrease(index);
    }
},);

// 总的来说：一共使用了3个类(原始数据  商品数据  界面数据) 将数据相互隔离，在改动数据的时候并没有改动原始数据
// 这样做保护了原始数据 将来在其他地方使用相同的原始数据时 彼此之间不受影响

>>>>>>> 0b8f000a908c0d6f81326f420fa4d538b51a8dce
// 将每个功能点封装成一个方法 使用时逻辑清晰 各个方法之间分工明确 互相影响较小