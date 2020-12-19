(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{381:function(s,a,t){"use strict";t.r(a);var e=t(42),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"macosでcomposer-install-した時にphp-intlでエラーになった時"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macosでcomposer-install-した時にphp-intlでエラーになった時"}},[s._v("#")]),s._v(" macOSでcomposer install した時にphp-intlでエラーになった時")]),s._v(" "),t("h2",{attrs:{id:"始まり"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#始まり"}},[s._v("#")]),s._v(" 始まり")]),s._v(" "),t("p",[t("code",[s._v("composer install")]),s._v("をしたら、"),t("code",[s._v("php-intl")]),s._v("がないと怒られてできなかった....")]),s._v(" "),t("p",[s._v("調べてみたら、MacOSのデフォルトのPHPでは 、"),t("code",[s._v("php-intl")]),s._v("が入っていなかったのが原因っぽい")]),s._v(" "),t("h3",{attrs:{id:"おまけ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#おまけ"}},[s._v("#")]),s._v(" おまけ")]),s._v(" "),t("p",[t("code",[s._v("homebrew")]),s._v("も"),t("code",[s._v("homebrew/php")]),s._v("がdeprecatedになり、"),t("code",[s._v("homebrew/core")]),s._v("に含まれたので同じことが起きているっぽい")]),s._v(" "),t("h3",{attrs:{id:"_1-新しくphp-7-3を入れる"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-新しくphp-7-3を入れる"}},[s._v("#")]),s._v(" 1.新しく"),t("code",[s._v("PHP@7.3")]),s._v("を入れる")]),s._v(" "),t("p",[s._v("このコマンドを入力して新しいPHPのバージョンを入れる！")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" $ brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" php@7.3\n")])])]),t("h2",{attrs:{id:"_2-パスを通す"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-パスを通す"}},[s._v("#")]),s._v(" 2.パスを通す")]),s._v(" "),t("p",[s._v("パスを通して使えるようにする")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/opt/php@7.1/bin:'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.zshrc\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/opt/php@7.1/sbin:'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.zshrc\n")])])]),t("p",[s._v("一応確認をしておく")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" php\n")])])]),t("h2",{attrs:{id:"_3-古い設定ファイルを消す"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-古い設定ファイルを消す"}},[s._v("#")]),s._v(" 3.古い設定ファイルを消す")]),s._v(" "),t("p",[s._v("今使っている設定ファイルだと"),t("code",[s._v("php-intl")]),s._v("が使えないので、次のフォルダの"),t("code",[s._v("conf.d")]),s._v("をどっかにおく")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/local/etc/php/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("バージョン"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/conf.d /usr/local/etc/php/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("バージョン"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/conf.d.bk\n")])])]),t("p",[s._v("これでOK！")])])}),[],!1,null,null,null);a.default=n.exports}}]);