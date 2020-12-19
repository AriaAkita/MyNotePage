(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{389:function(s,a,t){"use strict";t.r(a);var e=t(42),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"clasp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clasp"}},[s._v("#")]),s._v(" Clasp")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/google/clasp",target:"_blank",rel:"noopener noreferrer"}},[s._v("Clasp"),t("OutboundLink")],1),s._v("GASをローカルで管理するときに使うコマンド")]),s._v(" "),t("p",[s._v("なんかtypescriptが使えた")]),s._v(" "),t("p",[s._v("Nodeを使うので注意すること")]),s._v(" "),t("h2",{attrs:{id:"install方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install方法"}},[s._v("#")]),s._v(" install方法")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @google/clasp\n")])])]),t("h2",{attrs:{id:"ログインする"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ログインする"}},[s._v("#")]),s._v(" ログインする")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ clasp login\n")])])]),t("p",[s._v("ブラウザが開くのでそれでログインする")]),s._v(" "),t("h2",{attrs:{id:"環境を作る"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#環境を作る"}},[s._v("#")]),s._v(" 環境を作る")]),s._v(" "),t("h3",{attrs:{id:"modulesの追加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modulesの追加"}},[s._v("#")]),s._v(" modulesの追加")]),s._v(" "),t("p",[s._v("フォルダ作った後にmodulesを追加する")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --dev @google/clasp\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v("  @types/google-apps-script\n")])])]),t("h2",{attrs:{id:"tslintの追加-やらなくてもいいよ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tslintの追加-やらなくてもいいよ"}},[s._v("#")]),s._v(" tslintの追加（やらなくてもいいよ）")]),s._v(" "),t("p",[s._v("使うなら入れておくと良いと思うよ")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --dev tslint\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" tslint --init\n")])])]),t("h3",{attrs:{id:"claspの設定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#claspの設定"}},[s._v("#")]),s._v(" claspの設定")]),s._v(" "),t("p",[s._v("Claspのプロジェクトを作成する")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ clasp create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("プロジェクト名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("次の選択肢から選ぶdocsとかsheetsとかはgoogle driveにファイルが作られるよ")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("? Create "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" script? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Use arrow keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n❯ standalone\n  docs\n  sheets\n  slides\n  forms\n  webapp\n  api\n")])])]),t("h4",{attrs:{id:"作業ファイルパスを変えたい場合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作業ファイルパスを変えたい場合"}},[s._v("#")]),s._v(" 作業ファイルパスを変えたい場合")]),s._v(" "),t("p",[t("code",[s._v(".clasp.json")]),s._v("に"),t("code",[s._v("rootDir")]),s._v("とファイルパスを書く")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scriptId"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"何かが入るよ"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rootDir"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("code",[s._v("appsscript.json")]),s._v("をsrcに移動する")]),s._v(" "),t("p",[s._v("そこにtsファイルを置いて作業する")]),s._v(" "),t("h3",{attrs:{id:"gdriveに上げてみる"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gdriveに上げてみる"}},[s._v("#")]),s._v(" GDriveに上げてみる")]),s._v(" "),t("p",[t("code",[s._v("appsscript.json")]),s._v("の場所に移動してコマンドを実行！")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ clasp push\n")])])]),t("p",[s._v("この後にブラウザでgasのコードが表示されてtsがトランスコンパイルされている")]),s._v(" "),t("h1",{attrs:{id:"疑問"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#疑問"}},[s._v("#")]),s._v(" 疑問")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("appsscript.json")]),s._v("でpushしないといけないの？")])]),s._v(" "),t("li",[t("p",[s._v("TypeScriptが完全に使えるの？")]),s._v(" "),t("ul",[t("li",[s._v("https://github.com/google/clasp/blob/master/docs/typescript.md")]),s._v(" "),t("li",[s._v("ここを確認したら良さそう")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);