##接口
#### 商品列表
* /goods/

```json
request: {
	rank: 0, // 0:最热, 1:最快, 2:最新, 3:高价, 4:低价
	page: 1, // 商品分页返回，默认返回第一页的内容
	limit: 20 // 分页每页返回的商品数量，默认每页返回20条
	type: apple // 查询指定分类的商品，如果这个字段为空则返回全类别商品
}

response: {
	"good_lists": [
		{
			"gid": 1475518,  // 商品的唯一 id
			"sid": 507,		// 商品的开奖期数
			"title": "这里是商品标题",
			"description": "这里是商品的描述信息",
			"icon": "http://dummyimage.com/200x200/4A7BF7", // 商品图片
			"total": 314,		// 商品的总额
			"remain": 58		// 商品已被购买的份数
		}...
	]
}
```

#### banner列表
* /banner/

```json
response: {
	"img_list": [
		{
			"img": "http://dummyimage.com/200x200/4A7BF7", // 图片
			"type": url || goods， // 商品或者活动链接
			"number": 1000, // 当类型为商品时这个字段返回 sid
		}
	]
}
```

#### 商品查询列表
* /goods/search/

```json
response: {
	"type_list": [
		{
			"icon": xxxx, // 分类的图标
			"name": 苹果专题, // 分类的名称
			"type_num": apple	// 分类编号，用于查询使用
		}
	]
}
```

#### 商品详细信息
* /goods/info/

```json
request: {
	sid: 100 // 商品动态sid
}

response: {
	"sid": xxx,
    "gid": xxx,
    "period": 101, //期数
    "title": xxx,
    "description": xxxx,
    "icon": xxxxx,
    "total": 6553,    //总需购买份数
    "purchase": 5000,  //已购买份数
    "status": 0, //0:已结束，1：正在进行，2：即将揭晓
    "prize": {},  // status=1
    "prize": {    // status=2
        "prize_time": xxxxx, //开奖时间
        "basic_time": xxxxx, //服务器当前时间
    },
    "prize": {      //status=0
        "uid": xxx, //中奖者uid
        "phone" : xxxx,//中奖者电话
        "username": xxx, //中奖者姓名
        "level": 1, 
        "level_img": "http://static.iduobao.net/level/aos-level-icon/pic_lv1.png", 
        "level_title": "夺宝小将",// 
        "headimg": xxx, //头像
        "ip_address": “广东广州”, //中奖者ip归属地
        "buy": 10, //中奖者购买份数
        "code": 100234, //幸运码
        "prize_time": xxxx, //开奖时间
        "pid": 10, //中奖者本次晒单的编号
    }
}
```

#### 商品图文详情
*  /goods/detail

```json
request: {
	gid: 100 // 商品唯一 id
}

response: {
	"detail": "http://xxxx,http://xxxx" // detail为逗号分隔的字符串
}
```

#### 商品参与记录
* /purchase/record

```json
request: {
	sid: int // 商品动态sid
	start: int // 加载更多，返回上一次加载最后的一个购买pid
	limit: int // 返回数据条数,默认10
}

response: {
	[
		{
            "username": 'zhouzhanpeng', //购买者昵称
            "headimg": 'xxxx', //购买者头像
            "buy": 10, //购买份数
            "ip": '115.29.230.11', //ip
            "ip_address": '广东广州', //ip地址
            "buy_time": 1411231233, //购买时间
            "buy_date":"2016-02-13", //购买日期
            "pid": 2, //下单编号，可用于查询该笔订单的相关信息 
        },
        ……
	]
}
```

#### 计算详情
* /caldetail/info/

```json
request: {
	sid: int // 商品动态sid
}

response: {
	"status": 1, // 状态码 1为成功，0为失败
    "msg": "",	// 错误信息
    "d": {
        "purs": [
        {
            "username": "187*****067",
            "number": "150241549", //计算值
            "time": "15:02:41.549" // 计算时间

        },
        ...
        ]
        "sales": {
            "status": 0,
            "codea": 7520731976, //A值
            "codeb": "26183", // B值
            "code": 10000048, // 中奖码
            "lottery_period": 20160727055
        },
        "query_url": "http://www.cqcp.net/game/ssc/"
        "is_mk": 0|1 => 是否秒开
    }
}
```

#### 最新揭晓
* /openlist/

```json
response: {
	"new_lists": [
		{
			"type": 1||2||3, 返回商品的揭晓状态
			"icon": 商品图标
			"title": 商品名称
			"total": 商品总价
			"msg": 当 type 为2时这个字段返回错误原因
			"time": 当 type 为1时商品开奖的时间戳
			"remain": 当 type 为3时这个字段返回中奖者购买的份数
			"luck_code": 当 type 为3时这个字段返回中奖者的幸运号码
			"user_name": 当 type 为3时这个字段返回中奖者的名称
			"user_icon": 当 type 为3时这个字段返回中奖者的头像
			"gift_time": 当 type 为3时这个字段返回中奖时间，类型为字符串
		}
	]
}
```

#### 晒单列表
* /share_goods/

```json
request: {
	gid: xxx // 当这个字段有值时返回对应商品的历史晒单
	start: int // 加载更多，返回上一次加载最后的一个购买pid
	limit: int // 返回数据条数,默认10
}

response: {
	"share_lists": [
		{
			"user_icon": 用户头像
			"luck_code": 幸运号码
			"sid": 中奖商品的动态 id
			"user_name": 用户名称
			"description": 用户晒单内容
			"join_num": 用户参与次数
			"icon": [xxx,xxx,xxx] 用户晒单图片列表
			"luck_num": 点赞次数
			"time": 晒单时间
		}
	]
}
```
#### 往期揭晓
* /previously/

```json
request: {
	gid: xxx // 商品唯一 id
	start: int // 加载更多，返回上一次加载最后的一个购买pid
	limit: int // 返回数据条数,默认10
}

response: {
	"period": 期号
	"buy_time": 揭晓时间字符串格式
	"user_name": 中奖者名称
	"user_addr": 中奖者地址
	"gift_code": 中奖号码
	"buy": 本期参与次数
	"user_icon": 用户头像
	"sid": 商品动态 sid
}
```

#### 猜你喜欢
* /shopcat/youlike

```json
response: {
	[
		{
			"icon": 商品图片
			"title": 商品名称
			"total": 商品总数
			"remain": 已购买次数
		}
	]
}
```

#### 购物车列表
* /shopcat/mycart

```json
response: {
	[
		{
			"sid": 6,
            "gid": 1,
            "total": 6388,
            "purchase": 4592,
            "period": 2,
            "title": "Apple MacBook Air 13.3英寸宽屏笔记本电脑",
            "description": "2014年新款MacBook Air",
            "icon": "http://172.16.2.68:8899/goods/mac_icon.jpg",
            "change": 0, //没改变，[1：（普通）剩余数量变更；2：库存不足；4：期数变更；8：商品下架]
            "notice": "商品已过期，自动更新为第2期；", //提醒信息，默认为空字符串""
            "buy": 1000    //用户购买份数
		}
	]
}
```

#### 添加购物车
* /shopcat/putcart

```json
request: {
	sid: xxx // 商品编号
	buy: xx  //  购买份数，默认为5
}
```

#### 删除购物车商品
* /shopcat/delcart

```json
reuqest: {
	sid: xxx // 商品编号
}
```

#### 获取他人信息
* users/other/info

```json
request: {
	uid: xxx // 用户唯一 id
}

response: {
	"username": "fuhuixiang",
    "phone": "15902044547",
    "headimg": "http://static2.iduobao.net/2015/07/headimg.png",
    "uid": 185950,
    "uid_unique": "1433490960950"  //用户唯一ID
}
```

#### 获取他人订单记录
* shopcat/other/record

```json
request: {
	uid: xxx 		// 用户id
	last_sid: xxx 	// 用户加载更多，上一次加载的最后一个sid
	status: xxx 	// 商品状态(2：已揭晓， 1： 正在进行和正在揭晓, 0:全部[默认])
	limit: xxx 		// 数据条数，默认10
}

response: {
	[
		{
			"description": "", //商品描述
          "gid": 140, 
          "icon": "", //商品缩略图
          "period": 330, //商品期数
          "purchase": 100, //已购买份数
          "sid": 2976, 
          "title": "商品名称", 
          "total": 10000， //总需
          "buy": 10//用户购买次数
          "prize_info": {
          	"status": 0, //0:已结束，1：正在进行，2：即将揭晓
          	"prize": {},  // status=1  正在进行无中奖信息
          	"prize": {    // status=2  即将揭晓状态需显示倒计时
          	"prize_time": xxxxx, //开奖时间
          	"basic_time": xxxxx, //服务器当前时间
      		},
          "prize": {      //status=0  已结束状态需显示中奖者信息
          	"uid": xxx, //中奖者uid
          	"phone" : xxxx,//中奖者电话
          	"username": xxx, //中奖者姓名
          	"headimg": xxx, //头像
          	"ip_address": “广东广州”, //中奖者ip归属地
          	"buy": 10, //中奖者购买份数
           	"code": 100234, //幸运码
          	"prize_time": xxxx, //开奖时间
          	"pid": 10, //中奖者本次晒单的编号
          }
		}
	]
}
```

#### 注册接口
* /users/register

```json
request: {
	phone: xxx 	// 用户登陆手机号码，eg：13570123456
	pwd: xxx 	// 用户密码
	code: xxx 	// 验证码
}

response: {
	"token": xxxxxxxxxxxxxx,
    "uid": 10001
}
```

#### 登录接口
* /users/logo

```json
request: {
	phone: xxx 	// 用户手机号
	pwd: xxx 	// 用户密码
}

response: {
	"uid": 10015,
    "username": "Zhanpeng Zhou",
    "phone": 13570362123,   
    "sex": 0, //用户性别，0：保密，1：男，2：女
    "headimg": "http://www.xxxxx.com/static/headimg/xx/xx/xxx",
    "coin": 100， //夺宝币
    "exp": 1000,//经验值
    "next_level_exp"： 2000, //下一级别所需经验值
    "level_img" : "http://static.iduobao.net/level/1.png"， //等级图标
    "level": 2, //用户等级
    "level_title": "夺宝小将",// 等级名
    "birthday": 1420070400 // 时间戳 '2015-01-01'， 用户生日
    "is_pwd_set": 1, //是否已设置密码 1:是， 0:否
    "uid_unique": user_expand_info.uid_unique,
    "useable_redbags": 6, //可使用红包数
    "beans": 1000, //幸运豆数
}
```

#### 红包接口
* users/redpack/list

```json
request: {
	start_id: xxx 	// 列表最后一条记录id 第一页加载上传0
	limit: xxx 		// 每页记录数
}

response: {
	"description": "tset", //红包描述
    "title": "test", //红包标题
    "url": "", //跳转url
    "start_time": 1465344000, // 起始时间戳 
    "id": 1, // 用户红包id
    "expire_time": 1465257600, //过期时间
    "restrict_money": 3, // 满3元可用
    "price": 2 //红包金额
    "enable": 1 
    "is_valid": 1
}
```

#### 我的充值记录
* users/records/list

```json
request: {
	start_id: xxx 	// 列表最后一条记录id 第一页加载上传0
	limit: xxx 		// 每页记录数
}

response: {
	[{
        "coin": 1, //夺宝币
        "create_time": 1433518030, //充值时间
        "dis_count": 100, //充值折扣, 
        "exorderno": "test_exorderno", //充值流水号
        "id": 12,   //充值记录id
        "is_only_charge": 1, //该订单是否只是充值 0:不是， 1:是 注:在购买商品入口付款的充值记录为0,而充值入口进入的为1
        "pay_type_id": 1, //付款方式id
        "pay_type_name": "支付宝",//付款方式名称 
        "points": 0, //充值消耗的积分数， 注：用积分兑换时，该值为相应的消耗积分， 其他不消耗积分的充值方式，改值为0
        "price": 1, //付款金额
        "status": 3, //充值状态 3:充值成功， 2:确认中, 1:未付款， -1:充值失败
        "uid": 1
    }...
]}
```