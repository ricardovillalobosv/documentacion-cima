(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{172:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),e("ul",[e("li",[e("p",[t._v("El archivo "),e("code",[t._v("index.js")]),t._v(" que se encarga de hacer las peticiones a los diferentes servicios de la "),e("code",[t._v("API")]),t._v(" utilizando el método nativo "),e("a",{attrs:{href:"https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch",target:"_blank",rel:"noopener noreferrer"}},[t._v("fetch"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(13)]),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("En esta carpeta se ha modularizado diferentes funciones ya que estas son utilizadas por distintos componentes, esto se realizó para que dichas funciones sean reutilizables y de fácil acceso.")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),e("p",[t._v("Componente principal del proyecto. En este componente es donde se importan todos los estilos del proyecto.")]),t._v(" "),t._m(21),t._m(22),t._v(" "),e("p",[t._v("EventBus sirve para la comunicación entre componentes, permite emitir un evento en un componente y escuchar ese evento en otro.")]),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),e("p",[t._v("Archivo donde se encuentran las diferentes rutas para las secciones del proyecto, en este archivo se enlazan los componentes a diferentes URLs.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"estructura"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estructura","aria-hidden":"true"}},[this._v("#")]),this._v(" Estructura")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Después de clonar el proyecto nos encontraremos con la siguiente estructura. El core del proyecto se encuentra dentro de la carpeta "),s("code",[this._v("src")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n├── src\n│   ├── assets\n│   │   ├── fonts\n│   │   └── styles\n│   │\n│   ├── components\n│   │   ├── Autocomplete.vue\n│   │   ├── BarActions.vue\n│   │   └── ...\n│   │\n│   ├── configuration\n│   │   └── core.js\n│   │\n│   ├── functions\n│   │   ├── asistencia.js\n│   │   └── index.js\n│   │\n│   ├── mixins\n│   │   ├── mixinsClickOutside.js\n│   │   ├── mixinsFiles.js\n│   │   └── ...\n│   │\n│   ├── store\n│   │   ├── modules\n│   │   └── store.js\n│   │\n│   ├── views\n│   │   ├── AllFiles.vue\n│   │   ├── Dashboard.vue\n│   │   ├── Login.vue\n│   │   └── ..\n│   │\n│   ├── App.vue\n│   ├── event-bus.js\n│   ├── main.js\n│   └── routes.js\n│\n└── package.json\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assets","aria-hidden":"true"}},[this._v("#")]),this._v(" assets")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("En la carpeta "),s("code",[this._v("assets")]),this._v(" se encuentran todos los recursos de la aplicación como los archivos de estilos "),s("code",[this._v("SASS")]),this._v(" ejemplo "),s("code",[this._v("styles.scss")]),this._v(", además de las typografias y font-icons.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Para los estilos, todos ellos convergen en el archivo "),s("code",[this._v("styles.scss")]),this._v(" este archivo es el encargado de importar todos los demás archivos sass divididos en módulos para después ser utilizados por la aplicación.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#components","aria-hidden":"true"}},[this._v("#")]),this._v(" components")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("En la carpeta components se encuentran todos los "),s("code",[this._v("componentes")]),this._v(" que conforman el proyecto, Estos componentes son utilizados en los diferentes layout.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" configuration")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("En la carpeta "),e("code",[t._v("configuration")]),t._v(" se encuentra el archivo de configuración "),e("code",[t._v("core.js")]),t._v(" que contiene la "),e("strong",[t._v("ruta de la API")]),t._v(" y el "),e("strong",[t._v("token")]),t._v(" de la aplicación.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" host "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://URL:PORT/api/school"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" token "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"186q2w3e4r5t6y9r2iecda5redboa02424312ac"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" host"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[this._v("#")]),this._v(" functions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("En la carpeta "),s("code",[this._v("funcitons")]),this._v(" se encuentra:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("También se encuentra la función "),s("code",[this._v("asistencia.js")]),this._v(", esta se reutilizó para poder hacer la búsqueda de usuarios en un autocomplete.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"mixins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixins","aria-hidden":"true"}},[this._v("#")]),this._v(" mixins")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#store","aria-hidden":"true"}},[this._v("#")]),this._v(" store")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("En esta carpeta se encuentra el "),s("code",[this._v("estado")]),this._v(" de la aplicación:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("La carpeta "),e("code",[t._v("modules")]),t._v(" contiene los diferentes archivos de estados modularizados.")]),t._v(" "),e("li",[t._v("El archivo "),e("code",[t._v("store.js")]),t._v(" se encarga de importar todos los archivos de la carpeta "),e("code",[t._v("modules")]),t._v(" para ser usados por la aplicación.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#views","aria-hidden":"true"}},[this._v("#")]),this._v(" views")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("En esta carpeta se encuentran las diferentes ventanas de la aplicación, estas son utilizadas por el archivo "),s("code",[this._v("router.js")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"app-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-vue","aria-hidden":"true"}},[this._v("#")]),this._v(" App.vue")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scss"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style"}},[e("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token atrule"}},[e("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./assets/styles/styles.scss"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"event-bus-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-bus-js","aria-hidden":"true"}},[this._v("#")]),this._v(" event-bus.js")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[t._v("// Emite\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\nmethods"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("emitMethod")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    EventBus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EVENT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payLoad"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n// Escucha\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  EventBus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EVENT_NAME")]),t._v("’"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("payLoad")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"main-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#main-js","aria-hidden":"true"}},[this._v("#")]),this._v(" main.js")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Archivo principal del proyecto, es aquí donde se importan las dependencias que harán funcionar todo el proyecto como "),s("code",[this._v("vue")]),this._v(", "),s("code",[this._v("vue-router")]),this._v(", etc. y la instancia principal de "),s("code",[this._v("Vue")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"routes-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routes-js","aria-hidden":"true"}},[this._v("#")]),this._v(" routes.js")])}],!1,null,null,null);s.default=n.exports}}]);