const calls = [
  {
    name: "ミョーホントゥスケ広場",
    content:
      "ミョーホントゥスケ 化繊(かせん)飛(とび)除去(じょきょ)\nジャージャー ファイボー ワイパー",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7147347510569241857",
  },
  {
    name: "ミョーホンドライバー",
    content:
      "ミョーホンドライバー 化繊飛ライガー\nジャッジャー バリボー ストライパー",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7178809436734115074",
  },
  {
    name: "スタンダード",
    content:
      "タイガー ファイヤー サイバー ファイバー\nダイバー バイバー ジャージャー (ファイボー) (ワイパー)",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7146996289014615298",
  },
  {
    name: "ジャパニーズ",
    content:
      "虎(とら) 火(ひ) 人造(じんぞう) 繊維(せんい)\n海女(あま) 振動(しんどう) 化繊(かせん) 飛(とび) 除去(じょきょ)",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7231919421583789313",
  },
  {
    name: "ねるねるねるね",
    content:
      "ねるねるねるねるねるねるねるねる\nねるねるねるねるねーるーねー\nねればねるほど色が変わって\n👏うまい テーレッテレー",
    videoUrl: "https://www.tiktok.com/@fact_m_q/video/7354411256838753544",
  },
  {
    name: "アイヌ",
    content:
      "チャペ アペ カラ キナ\nララ トゥスケ ウィスゥペ ケスィ スィスゥパ",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7200370427607190785",
  },
  {
    name: "園長",
    content:
      "ファイボー ワイパー ファーマー ジャスパー\nホワイパー クーパー イエスクレイパー！",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7233758319662370050",
  },
  {
    name: "スペイン語",
    content:
      "バーモス(始動)\nティグレ フェゴ シベル フィブラ\nブゾ ビブラル ヘルセイ\n(ボラーレ リンピアパラブリサス)",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7235650971316063489",
  },
  {
    name: "混沌",
    content:
      "ワールドカオス！！(発動)\n諸行(しょぎょう) 木暮(こぐれ) 時雨(しぐれ) 神楽(かぐら)\n金剛山(こんごうさん) 翔襲叉(しょうしゅうしゃ)",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7232659084875468033",
  },
  {
    name: "アイヌ日可変",
    content:
      "ウィスペケスィ チャペチャペチャペ\nチャペアペカラキナカラアペチャペ\n除去 飛 除去 虎虎虎\n虎火人造繊維海女振動化繊(倍速)",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7201804680949746945",
  },
  {
    name: "チキパ",
    content:
      "ライオン トラ チーター\nラタラタ ラトラーター\n栄養!栄養!栄養!栄養!カプサイシンって知ってるー？",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7150603964399095042",
  },
  {
    name: "ガチ恋口上ショート",
    content:
      "言いたいことがあるんだよ\nやっぱり◯◯はかわいいよ\nすきすき大好きやっぱ好き\n世界で一番愛してる\nあーいーしーてーるー",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7290132766795074834",
  },
  {
    name: "ガチ恋口",
    content:
      "言いたいことがあるんだよ\nやっぱり◯◯はかわいいよ\nすきすき大好きやっぱ好き\nやっと見つけたお姫様\n俺が生まれてきた理由\nそれは◯◯に出会うため\n俺と一緒に人生歩もう\n世界で一番愛してる\nあーいーしーてーるー (絶対結婚しような！)",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7165088492693802242",
  },
  {
    name: "日体大",
    content:
      "ハイ!ハイ!ハイ!ハイ!ハイ!ハイ!ハイ!ハイ!\nレッツゴー 日体大\n日体大 日体大 日体大(ｳｯ)\n日体大 日体大 日体大(ｳｯ)\n日体大 日体大 日体大(ｳｯ)\nレッツゴー 日体大",
    videoUrl: "https://www.tiktok.com/@jizowotaku/video/7350314058094038280",
  },
  {
    name: "林修",
    content:
      "ウリャ!オイ!×4あー、まだいかない!\nウリャ!オイ!×4あー、まだいかない!\nいついくの?今でしょ!👏👏👏👏👏しゃーいくぞ!",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7266447298740145409",
  },
  {
    name: "ホグワーツ",
    content:
      "マルフォイ マルフォイ マルフォイ マルフォイ\nあー👏👏グリフィンドール\nアクシオ レダクト ルーモス\nウィンガーディア厶レヴィオーサー\n貴方のはレヴィオサー\nエクスペクトパトローナム\nトムリドル トムリドル\nヴォルデモートって知ってる?\n(ハーマイオニーグレンジャー)",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7147378491808320770",
  },
  {
    name: "可変三連",
    content:
      "人造ファイヤファイボワイパー\nタイガータイガータタタタタイガー\nチャペアペカラキナ チャペアペカラキナ\nミョーホントゥスケ👏ワイパー\nファイヤーファイヤー虎虎カラキナ\nチャペアペファーマー海女海女ジャスパー\n虎タイガー 虎タイガー\n人造繊維 イェッタイガー",
    videoUrl:
      "https://www.tiktok.com/@ilife_official/video/7079387245416860930",
  },
  {
    name: "繋がりタイガー",
    content:
      "繋がりたい 繋がりたい\nやっぱり◯◯と繋がりたい\n繋がりたい 繋がりたい\n繋がりたいから繋がりタイガー (orやっぱり◯◯と繋がりタイガー)\nファイヤー サイバー ファイバー ダイバー\nバイバー ジャージャー ファイボ\nインジョ ジャスパー ビブラル 化繊\nイェッ ナルダ ファボリアスター",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7163968684019420417",
  },
  {
    name: "若気の至り",
    content: "若気の至りと\n言わんばかりの元気良さ!アーーイ!",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7302352219981057298",
  },
  {
    name: "超可愛い",
    content:
      "超可愛い 超可愛い ◯◯可愛い 超可愛い\n超可愛い 超可愛い ◯◯可愛い 超可愛い",
    videoUrl: "https://www.tiktok.com/@yaimati10/video/7302066771580767496",
  },
  {
    name: "キャプ翼",
    content:
      "キタキタキタキタワイテキタ\nタイガータイガータイガーショット\n虎タイ虎タイ虎タイガー\n人造繊維 イエッタイガー\nジャッジャージャッジャーバリバリボー\nストストストストストライカー\nカール・ハインツ・シュナイダー!\nスカイ!ラブ!ハリケーン!",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7189596821776387329",
  },
  {
    name: "アッチェレ",
    content:
      "農場(のうじょう) 舞(まい) 海鵜(うみう) 跳(ちょう)\n除去(じょきょ)飛(とび)化繊(かせん)振動(しんどう)海女(あま)繊維(せんい)人造(じんぞう)火(ひ)\n虎 火 虎 火\n虎虎虎虎 虎火人造繊維海女振動\n海女振海女振海女振動 海女繊海女繊人造火\n虎 火 人造 繊維 海女 振動\n化繊 飛 除去 跳\n海鵜 舞 農場",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7147261207328673025",
  },
  {
    name: "ドイツキャンセル裏ドイツキャンセルイタリア",
    content:
      "ゲーエンヴィアー(始動)\nティーガァ フォイエル クゥンスト フィーバー (キャンセル)\nゲーエンヴィアー(始動)\nティーガァ フォイエル クゥンスト フィーバー (キャンセル)\nアンディアモ(始動)\nティーグレ フオーコ レプリカンテ フィーブラ\nバロンバーロ ヴィヴラメント テクノボラーレ\nアスティラッツィオーネ",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7173227372211195138",
  },
  {
    name: "ビスマルク口上",
    content:
      "高まるよ 高まるよ\n高まる低まるビスマルク\nシジマール アルシンド\nカズダンス ニーハイオーハイ\n缶チューハイ ウーロンハイ\nナチュラルハイ アイキャンフライ",
    videoUrl:
      "https://www.tiktok.com/@otakuhaisyakirai/video/7313857045751418113",
  },
  {
    name: "ビスマルク口上フル",
    content:
      "完!全!聖!域!\n絶対領域 ニーハイオーハイ\n缶チューハイ ウーロンハイ\nナチュラルハイ アップルパイ\n三角チョコパイ エンゼルパイ\nタオパイパイ ファールフライ\nピッチャーフライ キャッチャーフライ\nセンターフライ アイキャンフライ",
    videoUrl:
      "https://www.tiktok.com/@zennipponchekitarinai/video/7232282945577389313",
  },
  {
    name: "どんぐりたけし(湘南新宿ラインまで)",
    content:
      "どんぐりたけしMIX\nC3PO R2D2 DTKC どんぐりたけし\nサイ パンダ ハシビロコウ 上野 動物園の ラインナップ\nパンティライン パンティライン パンティライン (からの) 湘南新宿ライン",
    videoUrl: "https://x.com/sitra_official/status/1638859990177038338",
  },
  {
    name: "修造口上ショート",
    content:
      "がんばれがんばれできるできる!だめだめだめだめ諦めちゃ!\nDont worry be happy!\n今日からお前が富士山だ!",
    videoUrl: "https://x.com/taiyakiumaaaa/status/1776318587717951584",
  },

  // TODO: Add other calls as well
]

export default calls
