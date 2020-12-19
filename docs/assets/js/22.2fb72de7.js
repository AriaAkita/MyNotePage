(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{398:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-js"}},[s._v("#")]),s._v(" Vue.js")]),s._v(" "),a("h2",{attrs:{id:"vue-jsのbeta版を入れる方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-jsのbeta版を入れる方法"}},[s._v("#")]),s._v(" vue jsのbeta版を入れる方法")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @vue/cli@next\n")])])]),a("h2",{attrs:{id:"vuepressの入れ方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepressの入れ方"}},[s._v("#")]),s._v(" VuePressの入れ方")]),s._v(" "),a("p",[a("code",[s._v("Vue.js")]),s._v(" 、"),a("code",[s._v("VuePress")])]),s._v(" "),a("p",[s._v("せっかくノートを書いてるから、"),a("code",[s._v("VuePress")]),s._v("を導入してノートを外からでも見れるようにしてみた。")]),s._v(" "),a("p",[a("code",[s._v("Nuxt.js")]),s._v("とかもあるけど、静的なサイトを作るのにいいけど、Documentを作成するなら"),a("code",[s._v("VuePress")]),s._v("の方が楽そうだった")]),s._v(" "),a("h3",{attrs:{id:"_0-いつもの準備"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-いつもの準備"}},[s._v("#")]),s._v(" 0.いつもの準備")]),s._v(" "),a("p",[s._v("いつも通りにyarnでプロジェクトを作成する")]),s._v(" "),a("p",[s._v("いつも書いてるから説明はなし！")]),s._v(" "),a("h3",{attrs:{id:"_1-vuepressをプロジェクトにインストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vuepressをプロジェクトにインストール"}},[s._v("#")]),s._v(" 1.VuePressをプロジェクトにインストール！")]),s._v(" "),a("p",[s._v("次のコマンドでインストールする")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress\n")])])]),a("h3",{attrs:{id:"_2-出力先ディレクトリを作成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-出力先ディレクトリを作成"}},[s._v("#")]),s._v(" 2.出力先ディレクトリを作成")]),s._v(" "),a("p",[a("code",[s._v("docs")]),s._v("ディレクトリを作って、ここに"),a("code",[s._v("VuePress")]),s._v("用のファイルを出力する場所にする")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("GitPageを使う場合に、"),a("code",[s._v("docs")]),s._v(" ディレクトリをルートディレクトリにする設定があるから"),a("code",[s._v("docs")]),s._v("に出力するようにしたよ")])]),s._v(" "),a("h3",{attrs:{id:"_3-config-jsファイルで設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-config-jsファイルで設定"}},[s._v("#")]),s._v(" 3."),a("code",[s._v("config.js")]),s._v("ファイルで設定")]),s._v(" "),a("p",[a("code",[s._v("VuePress")]),s._v("の 設定はここの "),a("code",[s._v(".vuepress/config.js")]),s._v("に記載する")]),s._v(" "),a("p",[s._v("ここの設定は、ほぼこんな感じ")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Aria Akita\\'s Notes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    description"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ここでは、Aria Akitaが仕事や自分で勉強したことをまとめています'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    locales"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ja'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        sidebar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        displayAllHeaders"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        smoothScroll"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'meta'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'meta'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'viewport'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'width=device-width, initial-scale=1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'meta'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'robots'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'noindex'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    base"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/MyNotePage/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    dest"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'docs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("baseは、"),a("code",[s._v("GitPage")]),s._v("用に"),a("code",[s._v("https://ariaakita.github.io/MyNotePage/")]),s._v("の"),a("code",[s._v("/MyNotePage/")]),s._v("をBaseとするためにつけるよ")]),s._v(" "),a("li",[a("code",[s._v("dest")]),s._v("は、出力先のディレクトリを指定するよ")])]),s._v(" "),a("h3",{attrs:{id:"_4-package-jsonのscriptsに設定を追加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-package-jsonのscriptsに設定を追加"}},[s._v("#")]),s._v(" 4."),a("code",[s._v("package.json")]),s._v("の"),a("code",[s._v("scripts")]),s._v("に設定を追加")]),s._v(" "),a("p",[s._v("開発用とビルド用Scriptの実行コマンドを追加するなら下のような感じになるよ")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),a("p",[s._v("デバックするときは、"),a("code",[s._v("yarn run dev")]),s._v("を使って、本番用にデータを生成するなら"),a("code",[s._v("yarn run build")]),s._v("をするようにしたよ")])])}),[],!1,null,null,null);t.default=e.exports}}]);