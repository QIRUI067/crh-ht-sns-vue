NbComponent.loadBundle("flhexd0i",["exports"],function(e){var t=window.NbComponent.h,n=function(){function e(){this.topSpace=20}return e.prototype.px2rem=function(e){return e/75},e.prototype.render=function(){return[0!==this.topSpace&&t("div",{class:"space",style:{height:this.px2rem(this.topSpace)+"rem"}},t("slot",{name:"space"})),t("div",{class:"list"},t("slot",null))]},Object.defineProperty(e,"is",{get:function(){return"nb-list"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{topSpace:{type:Number,attr:"top-space"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".space.sc-nb-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.list.sc-nb-list{background:#fff}"},enumerable:!0,configurable:!0}),e}();e.NbList=n,Object.defineProperty(e,"__esModule",{value:!0})});