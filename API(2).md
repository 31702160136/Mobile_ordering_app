# API

###商品列表

```
GET /sell/buyer/product/list
```

参数

```
无
```

返回

```
{
    "code": 0,
    "msg": "成功",
    "data": [
        {
            "name": "热榜",
            "type": 1,
            "foods": [
                {
                    "id": "123456",
                    "name": "皮蛋粥",
                    "price": 1.2,
                    "description": "好吃的皮蛋粥",
                    "icon": "http://xxx.com",
                }
            ]
        },
        {
            "name": "好吃的",
            "type": 2,
            "foods": [
                {
                    "id": "123457",
                    "name": "慕斯蛋糕",
                    "price": 10.9,
                    "description": "美味爽口",
                    "icon": "http://xxx.com",
                }
            ]
        }
    ]
}
```


###创建订单

```
POST /sell/buyer/order/create
```

参数

```
name: "张三"
phone: "18868822111"
stationType: "A10"
openid: "ew3euwhd7sjw9diwkq" //用户的微信openid
items: [{
    productId: "1423113435324",
    productQuantity: 2 //购买数量
	detailFlavor:不加辣(不能为空，不能不传)
}]

```

返回

```
{
  "code": 0,
  "msg": "成功",
  "data": {
      "orderId": "147283992738221" 
  }
}
```

###订单列表

```
GET /sell/buyer/order/list
```

参数

```
openid: asdasdasdasdasdasdasdasd
page: 0 //从第0页开始
size: 10
```

返回

```
{
    "code": 0,
    "msg": "成功",
    "data": [
        {
            "orderId": "1544285611202468780",
            "buyerName": "xz",
            "buyerPhone": "13642914834",
            "buyerOpenid": "asdasdasdasdasdasdasdasd",
            "stationType": "A10",
            "orderAmount": 7,
            "createTime": 1544285611,
            "updateTime": 1544285611,
            "orderDetailList": null,
            "orderStatus": 0,
            "payStatus": 0
        },
        {
            "orderId": "1544285754447871089",
            "buyerName": "xz",
            "buyerPhone": "13642914834",
            "buyerOpenid": "asdasdasdasdasdasdasdasd",
            "stationType": "A10",
            "orderAmount": 7,
            "createTime": 1544285754,
            "updateTime": 1544285754,
            "orderDetailList": null,
            "orderStatus": 0,
            "payStatus": 0
        }
    ]
}
```

###查询订单详情

```
GET /sell/buyer/order/detail
```

参数

```
openid: asdasdasdasdasdasdasdasd
orderId: 1544288880904364708
```

返回

```
{
    "code": 0,
    "msg": "成功",
    "data": {
        "orderId": "1544288880904364708",
        "buyerName": "xz",
        "buyerPhone": "13642914834",
        "buyerOpenid": "asdasdasdasdasdasdasdasd",
        "stationType": "A10",
        "orderAmount": 7,
        "createTime": 1544288880,
        "updateTime": 1544288934,
        "orderDetailList": [
            {
                "detailId": "1544288880946737204",
                "orderId": "1544288880904364708",
                "productName": "麻辣",
                "productId": "1",
                "productPrice": 3.5,
                "productQuantity": 2,
                "productIcon": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534604329030&di=04f81fe7d6e22a50a9bc9549a0dc8e65&imgtype=0&src=http%3A%2F%2Fpic.chinaz.com%2F2018%2F0127%2F18012720113695768.jpg",
                "detailFlavor": "不加辣"
            }
        ],
        "orderStatus": 1,
        "payStatus": 0
    }
}
```

###取消订单

```
POST /sell/buyer/order/cancel
```

参数

```
openid: 18eu2jwk2kse3r42e2e
orderId: 161899085773669363
```

返回

```
{
    "code": 0,
    "msg": "成功",
    "data": null
}
```

###获取openid

```
重定向到 /sell/wechat/authorize
```

参数

```
returnUrl: http://xxx.com/abc  //【必填】
```

返回

```
http://xxx.com/abc?openid=oZxSYw5ldcxv6H0EU67GgSXOUrVg
```
###支付接口
```
/sell/pay/pa2
```
参数
```
openid: 18eu2jwk2kse3r42e2e
orderId: 161899085773669363
```
```
重定向到 到网站详情页
```


