const chatData = {
    "init" : {
        answers: [
            {content: "自己紹介して", nextId: "introduction"},
            {content: "どうやって英語を学習したの？", nextId: "learningEng"},
            {content: "外国人の友達が欲しい", nextId: "makeFriends"},
            {content: "デートしたい", nextId: "dating"}
        ],
        question: "こんにちは！Nagatoです。"
    },
    "introduction": {
        answers: [
            {content: "どこ出身？", nextId: "from"},
            {content: "趣味はなに？", nextId: "hobby"},
            {content: "彼女はいる？", nextId: "girlfriend"},
            {content: "バイトは何してる？", nextId: "partTimeJob"}
        ],
        question: "22歳、大学生です。アウトドアで休みの時はよく出かけます。社交的です。"
    },
    "hobby": {
        answers: [
            {content: "今までに行ったことがある国は？", nextId: "countries"},
            {content: "カメラは何を使ってる？", nextId: "camera"},
            {content: "おすすめのビールは何？", nextId: "favBeer"},
            {content: "趣味が合いそう！", nextId: "oops"},
        ],
        question: "旅行・サイクリング・登山・ピクニック・古着・カメラ・ビール・バナナマンが好きです。"
    },
    "girlfriend": {
        answers: [
            {content: "がんばれ。。", nextId: "thanks"},
            {content: "デートしたい", nextId: "dating"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "いないです。"
    },
    "partTimeJob": {
        answers: [
            {content: "行ってみたい！", nextId: "schmatz"},
            {content: "行ったことある！", nextId: "thanks"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Schmatzっていう、ドイツ料理＆ビールのレストランです"
    },
    "studyabroad": {
        answers: [
            {content: "もっと詳しく聞きたい", nextId: "more"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "短期留学でフィリピンに3カ月、長期留学で1年間オランダに行きました。"
    },
    "from": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}   
        ],
        question: "埼玉県です。"
    },
    "countries": {
        answers: [
            {content: "Instagramを見る", nextId: "https://www.instagram.com/1000.things"} ,
            {content: "最初の質問に戻る", nextId: "init"}  
        ],
        question: "20カ国くらいあります。Instagramに載せているので、見てみてください！"
    },
    "camera": {
        answers: [
            {content: "写真見てみたい！", nextId: "pictures"},
            {content: "最初の質問に戻る", nextId: "init"}  
        ],
        question: "Nikon D700です。たまにGoproも！"
    },
    "favBeer": {
        answers: [
            {content: "一緒にビール飲みに行きたい！", nextId: "more"},
            {content: "ビール以外は飲まないの？", nextId: "drinks"},
            {content: "最初の質問に戻る", nextId: "init"}  
        ],
        question: "ペールエール、IPA、ヴァイツェンなどなど。最近は青鬼の美味しさに感動しました！"
    },
    "oops": {
        answers: [
            {content: "もっと話してみたい！", nextId: "more"},
            {content: "最初の質問に戻る", nextId: "init"}  
        ],
        question: "それは嬉しいです！"
    },
    "pictures": {
        answers: [
            {content: "Instagramを見る", nextId: "https://www.instagram.com/1000.things"} ,
            {content: "最初の質問に戻る", nextId: "init"}  
        ],
        question: "Instagramに載せているので、見てみてください！"
    },
    "learningEng": {
        answers: [
            {content: "どうしたら外国人の方と出会えるの？", nextId: "meetFriends"},
            {content: "留学はした？", nextId: "studyabroad"},
            {content: "最初の質問に戻る", nextId: "init"} 
        ],
        question: "とりあえず外国人の方と仲良くなって、会話し続けました。"
    },
    "makeFriends": {
        answers: [
            {content: "どうしたら外国人の方と出会えますか？", nextId: "meetFriends"} ,
            {content: "最初の質問に戻る", nextId: "init"} 
        ],
        question: "積極的にいきましょう！視野が広がります。"
    },
    "meetFriends": {
        answers: [
            {content: "もっと詳しく聞きたい", nextId: "more"},
            {content: "最初の質問に戻る", nextId: "init"} 
        ],
        question: "国際交流や言語会のようなイベントに参加したり、アプリで見つけられます。"
    },
    "drinks": {
        answers: [
            {content: "一緒に飲みに行きたい！", nextId: "more"},
            {content: "最初の質問に戻る", nextId: "init"} 
        ],
        question: "飲みます！特に赤ワイン、日本酒が好きです。"
    },
    "schmatz": {
        answers: [
            {content: "どこの店舗で働いているの？", nextId: "more"},
            {content: "最初の質問に戻る", nextId: "init"} 
        ],
        question: "都内を中心に40店舗近くあるので、行ってみてください！"
    },
    "thanks": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"} 
        ],
        question: "ありがとうございます。"
    },
    "more": {
        answers: [
            {content: "DMする", nextId: "https://www.instagram.com/how_u_doin98"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "DMしてください！"
    },
    "dating" : {
        answers: [
            {content: "DMする", nextId: "https://www.instagram.com/passion_na_98"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "ご飯でも行きますか？DMしてください！",
    }  
}

export default chatData