import{h}from"../nb-component.core.js";var Topic=function(){function e(){}return Object.defineProperty(e.prototype,"link",{get:function(){return"http://baidu.com?wd="+encodeURIComponent(this.detailId)},enumerable:!0,configurable:!0}),e.prototype.render=function(){return[h("div",{class:"topic"},h("a",{href:this.link},"#",this.headTitle,"#"))]},Object.defineProperty(e,"is",{get:function(){return"ht-topic"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{detailId:{type:String,attr:"detail-id"},headTitle:{type:String,attr:"head-title"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".topic.sc-ht-topic{display:inline-block}.topic.sc-ht-topic   a.sc-ht-topic{color:#315ea1;font-size:.4266666666666667rem;line-height:.64rem;text-decoration:none}"},enumerable:!0,configurable:!0}),e}();export{Topic as HtTopic};