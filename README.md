# wechat
微信小程序学习

# 问题：
调用出来的很多数据后面保留有小数，目前不知道怎么去掉小数点后面的小数

首页新人有礼和安全保证都是单页面，

# 20161115
投资列表页面点击进入投资详情页没有跑通，sid不知道怎么传过去。
投资详情页面底部的投资记录里面的时间戳还没有转换过来。
投资进度条没有实现
下拉加载更多没有实现

# 20161116
投资列表页进入投资详情页面已经跑通 但是js里面调用感觉可以合并。
投资进度条百分比已经实现了，不过太坑了，不能只保留2位小数。

商行贷，商抵贷和商企贷的详情页是分开写的三个相同页面，是因为json文件调用不同，不过感觉是可以合起来写一个页面的，还没有找到办法。


在群里问大神，给了一些建议，投资详情页里面的数据后面有小数点已经截取掉了，是通过js实现的，
所有页面带有小数点的数据都已经处理完成。

=================================================================================================================================

# 待处理：
时间戳
下拉加载更多(包括投资列表，投资详情里面的投资记录，账户里面的暂时不不处理。)
首页新人体验标没有做
首页投资标也没有做

=================================================================================================================================


# 注意：
小程序官网上面说编译后的代码包不要超过1M 否则会上传失败，看了一下这个项目，貌似已经超过了1M 
发现图片就占了很大的空间，所以在上传的时候图片图片应该放到其他地方。


# 20161117 
删掉了我的账户里面的图像，改用微信图像。首页banner轮播图从官网上面获取，删掉了本地图片。现在代码包只有400多K。

通过封装函数FormateDate解决了时间戳的问题，封装的函数在公共的app.js里面。
删掉了util.js里面无用的代码。


# 20161118 
首页显示标已经完成，修改了封装的函数FormateDate的位置，放到了utils下面的FormateDate.js里面。
修改了如果大于9个月的标时只显示1的bug
修改了投资标题最后一位调用的问题。是通过计算出来的，并不是所有的都是 系列之1 
修改投资页面的的 融资金额 bug  把字符串截取改成了取整

# 注意
我的帐号里面的信息要通过用户登录之后才能调出来！现在没有与用户关联，所以在调用的时候出错了了。

# 20161119 
资金流水静态页面已经完善

更改了投资列表页面的请求地址方式 data传参已经可以了了，原因是请求网站上面的json的方法是POST content-type不是小程序默认的application/json
注意 content-type 要小写才可以

wx.request({
      url: 'https://www.phyt88.com/v2/project/obtain_invest_record_by_sid.jso',
      data:{
        pageSize:15,
        pageIndex:1,
      },
      method:"POST",
      header: {
          "content-type":"application/x-www-form-urlencoded; charset=UTF-8"
      },
      success: function(res) {
        that.setData({
            investList:res.data.rows,
          })  
      }
    })

# 20161121
使用了appid之后报错
asdebug.js:1  https://www.phyt88.com/v2/project/obtain_big_section_list.jso 不在以下合法域名列表中，请参考文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html
所有的数据调用不出来，是在微信后台里面没有配置。目前没有申请到小程序，

但是在本地测试没有appid的时候是可以调出来的。


#20161122
canvas 怎么在同一个页面画两个不同的canvas呢？

已经可以画多个canvas了了，详情见 账户 --》 总资产 

#20161124
账户总资产静态页面已经完成，用canvas画的的，注意旋转和移动，然后才开始重绘