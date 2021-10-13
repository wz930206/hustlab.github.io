"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{5414:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var r=a(7294),l=a(7198),c=a(3751),n=a(18),s=a(5444);function m(e){return Array.from(new Set(e)).sort((function(e,t){return e.localeCompare(t,"zh")}))}var o={company:"",city:"",work:""},i=function(){var e=function(){var e=(0,s.useStaticQuery)("1894775698").allCollectionJson.nodes,t=e.reduce((function(e,t){return{company:[].concat((0,n.Z)(e.company),[t.company.trim()]),city:[].concat((0,n.Z)(e.city),[t.city.trim()]),work:[].concat((0,n.Z)(e.work),[t.work.trim()])}}),{company:[],city:[],work:[]}),a=t.company,r=t.city,l=t.work;return{collections:e,companies:m(a),cities:m(r),works:m(l)}}(),t=e.collections,a=e.companies,i=e.cities,u=e.works,d=(0,r.useState)(t),p=d[0],b=d[1],h=[{type:"company",name:"公司",options:a},{type:"city",name:"城市",options:i},{type:"work",name:"岗位",options:u}];return r.createElement(l.Z,null,r.createElement(c.Z,{title:"互联网实习秋招参考手册"}),r.createElement("div",{className:"flex flex-col items-start md:items-center md:flex-row"},r.createElement("div",{className:"md:mr-4 h-28 w-28 text-7xl flex md:justify-center items-center justify-start"},"📜"),r.createElement("h1",{className:"text-2xl font-extrabold text-black md:text-5xl dark:text-white"},"互联网实习秋招参考手册")),r.createElement("div",{className:"mt-6 flex gap-4 items-center"},r.createElement("a",{href:"https://github.com/HUSTLab/hustlab.github.io"},r.createElement("img",{alt:"GitHub Repo stars",src:"https://img.shields.io/github/stars/hustlab/hustlab.github.io?style=social"})),r.createElement("a",{href:"https://github.com/HUSTLab/hustlab.github.io"},r.createElement("img",{src:"https://visitor-badge.glitch.me/badge?page_id=hustlab.github.io",alt:"visitor badge"}))),r.createElement("div",{className:"mt-6 text-gray-900 dark:text-white"},r.createElement("p",{className:"mt-2"},r.createElement("a",{href:"https://github.com/HUSTLab/hustlab.github.io",className:"text-yellow-700 transition hover:text-yellow-600 underline dark:text-blue-400  dark:hover:text-blue-300"},"互联网实习秋招参考手册")," ","最初由华科 19 级软硕同学发起，通过分发问卷，调研了已实习同学的实习经历。主要收集房租、上下班时间、加班情况、公司福利、团队氛围、所做业务、是否受政策影响等等几个方面的信息，帮助其他同学应对接下来的秋招，也给即将实习的同学做一份参考。你也可以"," ",r.createElement("a",{href:"https://github.com/HUSTLab/hustlab.github.io#%E5%8F%82%E4%B8%8E%E8%B4%A1%E7%8C%AE",className:"text-yellow-700 transition hover:text-yellow-600 underline dark:text-blue-400  dark:hover:text-blue-300"},"提交内容")," ","参与贡献。"),r.createElement("p",{className:"border-l-4 border-gray-200 py-2 my-3 px-3 text-gray-500"},"2021-10-13 整合"," ",r.createElement("a",{className:"text-yellow-700 transition hover:text-yellow-600 dark:text-blue-400  dark:hover:text-blue-300",href:"https://github.com/WorkerLivesMatter/WorkingTime"},"WorkerLivesMatter")," ","数据")),r.createElement("div",{className:"flex w-full mt-4 flex-col items-center gap-4 sm:flex-row"},h.map((function(e,a){return r.createElement("select",{key:a,onChange:function(a){!function(e,a){var r=e.target.value;o[a]=r;var l=function(e,t){return["","All",t].includes(o[e])},c=t.filter((function(e){return l("company",e.company)&&l("work",e.work)&&l("city",e.city)}));b(c)}(a,e.type)},defaultValue:"placeholder",required:!0,className:"select select-bordered w-full flex-1 text-base"},r.createElement("option",{value:"placeholder",disabled:"disabled"},e.name),r.createElement("option",{value:"All"},"全部"),e.options.map((function(e,t){return r.createElement("option",{key:t,value:e},e)})))}))),p.map((function(e,t){return r.createElement("div",{key:e.id,className:"card shadow mt-6 w-full"},r.createElement("div",{className:"card-body"},r.createElement("h2",{className:"card-title"},e.company,"-",e.department,"-",e.work),r.createElement("div",{className:"mb-3"},r.createElement("span",{className:"badge mr-2"},e.company),r.createElement("span",{className:"badge mr-2"},e.work),r.createElement("span",{className:"badge mr-2"},e.city),""!==e.industry&&r.createElement("span",{className:"badge mr-2"},e.industry)),r.createElement("p",{className:"mb-3"},"上下班时间：",e.startWork,"（上班），",e.endWork,"（下班）"),r.createElement("p",{className:"mb-3"},"用餐时间：",e.lunchTime,"（午餐），",e.dinnerTime,"（晚餐）"),r.createElement("p",{className:"mb-3"},"是否特殊工作日：",e.Wed,"（周三），",e.Fri,"（周五）"),r.createElement("p",{className:"mb-3"},"一周工作天数：",e.workDays,"，日报/周报：",e.report),r.createElement("p",{className:"mb-3"},"备注：",e.note)))})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e77129978469c5fab5f6.js.map