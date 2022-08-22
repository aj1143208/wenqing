// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "文清同学",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "生日快乐哟",  // 同上...
        "咱俩属于",
        "相逢未有便相识了",
        "这里面",
        "既有古人的红线之功",
        "还有现代的科技之便",
        "但是",
        "我相信",
        "一切皆是缘分",
        "所以",
        "一切随缘而定即可",
        "YAMI~~",
        "see you for the first time",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "see you for the first time": "./imgs/wenqing.png",
        
           //         "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我点我点我",
        play: "音乐滴要的要的",
        bannar_coming: "换个颜色试试",
        balloons_flying: "呀，好像少了点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "是生日快乐！！！",
        story: "A MESSAGE FOR YOU",
    }
};
