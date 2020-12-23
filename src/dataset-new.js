const defaultDataset = {
    "init" : {
        answers: [
            {content: "自己紹介して", nextId: "introduction"},
            {content: "どうやって英語を学習したの？", nextId: "learningEng"},
            {content: "外国人の友達が欲しい", nextId: "makeFrineds"},
            {content: "デートしたい", nextId: "dating"}
        ],
        question: "こんにちは！Nagatoです。"
    },
    "introduction": {
        answers: [
            {content: "趣味はなに？", nextId: "hobby"},
            {content: "彼女はいる？", nextId: "girlfrined"},
            {content: "どこに留学していたの？", nextId: "studyabroad"},
            {content: "どこ出身？", nextId: "from"}
        ],
        question: "22歳、大学生です。アウトドアで休みの時はよく出かけます。社交的です。"
    },
    "hobby": {
        answers: [
            {content: "今までに行ったことがある国は？", nextId: "countries"},
            {content: "カメラは何を使ってる？", nextId: "camera"},
            {content: "", nextId: ""},
            {content: "", nextId: ""},
        ],
        question: "旅行・サイクリング・登山・サッカー・古着・カメラ・ビール・バナナマン"
    },
    "girlfriend": {
        answers: [
            {content: "がんばれ。。", nextId: "thanks"},
            {content: "デートしたい", nextId: "dating"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "いないです。"
    },
    "studyabroad": {
        answers: [
            {content: "もっと詳しく聞きたい", nextId: "more"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "短期留学でフィリピンに、1長期留学でオランダに行きました。"
    },
    "from": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}   
        ],
        question: "埼玉県です。"
    },
    "conuntries": {
        answers: [
            {content: "Instagramを見る", nextId: "instagram"} ,
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
    "pictures": {
        answers: [
            {content: "Instagramを見る", nextId: "instagram"} ,
            {content: "最初の質問に戻る", nextId: "init"}  
        ],
        question: "Instagramに載せているので、見てみてください！"
    },
    "learningEng": {
        answers: [
            {content: "どうしたら外国人の方と出会えますか？", nextId: "meetFriends"},
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
    "more": {
        answers: [
            {content: "DMする", nextId: "instagram"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "DMで詳しく答えます！"
    },
    "dating" : {
        answers: [
            {content: "DMする", nextId: ""},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "ご飯でも行きますか？DMしてください！",
    }  
}

export default defaultDataset