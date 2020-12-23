/*const defaultDataset = {
  "init": {
      answers: [
          {content: "仕事を依頼したい", nextId: "job_offer"},
          {content: "エンジニアのキャリアについて相談したい", nextId: "consultant"},
          {content: "学習コミュニティについて知りたい", nextId: "community"},
          {content: "お付き合いしたい", nextId: "dating"},
      ],
      question: "こんにちは！🐯トラハックへのご用件はなんでしょうか？",
  },
  "job_offer": {
      answers: [
          {content: "Webサイトを制作してほしい", nextId: "website"},
          {content: "Webアプリを開発してほしい", nextId: "webapp"},
          {content: "自動化ツールを作ってほしい", nextId: "automation_tool"},
          {content: "その他", nextId: "other_jobs"}
      ],
      question: "どのようなお仕事でしょうか？",
  },
  "website": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webサイト細作についてですね。コチラからお問い合わせできます。",
  },
  "webapp": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
  },
  "automation_tool": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "自動化ツール開発についてですね。コチラからお問い合わせできます。",
  },
  "other_jobs": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "その他についてですね。コチラからお問い合わせできます。",
  },
  "consultant": {
      answers: [
          {content: "YouTubeで動画を見る", nextId: "https://www.youtube.com/channel/UC-bOAxx-YOsviSmqh8COR0w"},
          {content: "学習コミュニティについて知りたい", nextId: "community"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "トラハックは普段からYouTubeでキャリアについて発信しています。また、僕が運営するエンジニア向け学習コミュニティ内でも相談に乗っていますよ。",
  },
  "community": {
      answers: [
          {content: "どんな活動をしているの？", nextId: "community_activity"},
          {content: "コミュニティに参加したい", nextId: "https://torahack.web.app/community/"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "2020年3月から学習コミュニティを始めました！🎉Webエンジニアへの転職を目指す人向けに、プログラミングを教えたりキャリアの相談に乗っています。",
  },
  "community_activity": {
      answers: [
          {content: "さらに詳細を知りたい", nextId: "https://youtu.be/tIzE7hUDbBM"},
          {content: "コミュニティに参加したい", nextId: "https://torahack.web.app/community/"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "フロントエンド向けの教材の提供、キャリアや勉強法に関するメルマガの配信、週1のオンライン作業会などを開催しています！\n詳細はYouTube動画で紹介しています。",
  },
  "dating": {
      answers: [
          {content: "DMする", nextId: "https://twitter.com/torahack_"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "まずは一緒にランチでもいかがですか？DMしてください😘",
  },
}

export default defaultDataset

*/

const defaultDataset = {
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
            {content: "趣味はなに？", nextId: "hobby"},
            {content: "彼女はいる？", nextId: "girlfriend"},
            {content: "どこ出身？", nextId: "from"},
            {content: "デートしたい", nextId: "dating"}
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
        question: "旅行・サイクリング・登山・サッカー・古着・カメラ・ビール・バナナマンが好きです。"
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
    "thanks": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"} 
        ],
        question: "ありがとうございます。"
    },
    "more": {
        answers: [
            {content: "DMする", nextId: "https://www.instagram.com/passion_na_98"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "DMで詳しく答えます！"
    },
    "dating" : {
        answers: [
            {content: "DMする", nextId: "https://www.instagram.com/passion_na_98"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "ご飯でも行きますか？DMしてください！",
    }  
}

export default defaultDataset