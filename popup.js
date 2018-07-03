        <h2>Submitting feedback</h2>
        <div>Please wait</div>
      `},other:{type:Object,value:{}}},isdemo_changed:function(){this.isdemo&&this.open()},textarea_keydown:function(e){e.stopPropagation(),this.textarea_changed()},textarea_changed:i.throttle(function(){this.$$('#feedback_dialog').notifyResize(),this.save_feedback()},300),save_feedback:i.throttle(function(){localStorage.setItem('feedback_form_feedback',this.feedback)},1e3),email_changed_keydown:function(e){e.stopPropagation(),this.save_email()},save_email:i.throttle(function(){localStorage.setItem('feedback_form_email',this.email)},1e3),open:function(){this;var e=localStorage.getItem('feedback_form_feedback');e&&0<e.length&&(this.feedback=e);var t=localStorage.getItem('feedback_form_email');t&&0<t.length&&(this.email=t);let n=this.$$('#feedback_dialog');n.open()},submit_feedback:async function(){var e={message:this.feedback};this.submit_screenshot&&(e.screenshot=this.screenshot),this.submit_to_gitter&&(e.gitter=!0),this.submit_to_github&&(e.github=!0),this.email&&0<this.email.length&&(e.email=this.email),e.other=this.other,this.$$('#feedback_dialog').close(),this.$$('#submitting_wait_dialog').open();try{var t=await o.post_json('https://habitlab-reportbug.herokuapp.com/report_bug',e);this.wait_dialog_html=`
        <h2>Thanks for your feedback!</h2>
        <div>
        ${t.message}
        </div>
      `,this.$$('#submitting_wait_dialog').notifyResize()}catch(t){var n=s(e.message);this.wait_dialog_html=`
        <h2>Sorry, our server is having issues</h2>
        <div>
        Could you please email your feedback to us at <a href="mailto:${this.mailing_list}" target="_blank">${this.mailing_list}</a><br><br>
        ${n}
        </div>
      `,this.$$('#submitting_wait_dialog').notifyResize()}}})},,,,,,,,,,,,function(e,t,n){const{import_dom_modules:a}=n(0);n(1),n(26),n(55),n(77),n(63),n(65),a(n(460),'components/intervention-view-single-compact.html'),n(491)},,,,,,function(e,t,n){const{import_dom_modules:a}=n(0);n(1),n(56),n(6),n(43),n(72),n(172),n(177),n(55),n(26),a(n(469),'components/popup-view.html'),n(499)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e){e.exports='<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/paper-checkbox/paper-checkbox.html> <link rel=import href=../bower_components/paper-toggle-button/paper-toggle-button.html> <link rel=import href=intervention-parameter-view.html> <link rel=import href=pill-button-group.html> <link rel=import href=../bower_components/paper-tooltip/paper-tooltip.html> <dom-module id=intervention-view-single-compact> <template> <style>:host{display:block;width:100%;height:100%}.edit-button{text-align:center;text-transform:none;background-color:#415D67;color:#fff;-webkit-font-smoothing:subpixel-antialiased;margin-bottom:5px}.try-now-button{text-align:center;text-transform:none;background-color:#415D67;color:#fff;-webkit-font-smoothing:subpixel-antialiased}.interventions{width:45px;margin-right:10px;cursor:pointer}.always_show_button[active]{background-color:#add8e6}.never_show_button[active]{background-color:#add8e6}</style> <div> <div style=width:100%> <div style=\'display:flex;justify-content:space-between;align-items:center;align-content:space-around;font-family:Verdana,Geneva,Tahoma,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;font-size:16px;vertical-align:top;padding-left:5px;padding-top:8px\'> <div id=displayiconandname style=display:flex;width:200px;justify-content:flex-start;align-items:center;align-content:space-around> <img style=align-self:auto;width:50px;border:transparent class=interventions src={{get_intervention_icon_url(intervention)}} /> <div style=align-self:auto;width:150px;border:transparent>{{intervention.displayname}} </div> </div> <paper-tooltip fit-to-visible-bounds for=displayiconandname animation-delay=0>{{intervention.description}}</paper-tooltip> <div style=margin-right:10px;display:flex;width:225px;justify-content:flex-start;align-items:center;align-content:space-around> <div style=align-self:auto;width:150px;border:transparent> <pill-button-group id=pill_selector selected_idx={{pill_button_idx}} on-pill-button-selected=pill_button_selected buttons=\'["Off", "On"]\'></pill-button-group> <paper-tooltip fit-to-visible-bounds for=pill_selector animation-delay=0>Each time you visit <span>{{sitename}}</span>,<br>HabitLab will show one of the<br>nudges turned \'On\'.</paper-tooltip> </div> <template is=dom-if if={{custom}}> <div style=align-self:auto;vertical-align:middle;width:75px;margin-right:10px;border:transparent> <paper-button class=edit-button style=height:30px;min-width:5.2em on-click=edit_custom_intervention>Edit</paper-button> <paper-button class=try-now-button style=height:30px;min-width:5.2em;font-weight:400 on-click=preview_intervention>Try now</paper-button> </div> </template> <template is=dom-if if={{!custom}}> <div style=align-self:auto;vertical-align:middle;width:75px;margin-right:10px;border:transparent> <paper-button class=try-now-button style=min-width:5.2em;font-weight:400 on-click=preview_intervention>Try now</paper-button> </div> </template> </div> </div> </div> </div> <div style=margin-left:210px> <template is=dom-if if={{intervention.enabled_goals.length}}> <span>Supports your goals: </span> <template is=dom-repeat items={{intervention.enabled_goals}} as=goal> <span>{{goal.description}}</span> </template> <br> </template> <template is=dom-if if={{parameters_shown()}}> <template is=dom-repeat items={{intervention.parameters}} as=parameter> <span><intervention-parameter-view intervention={{intervention}} parameter={{parameter}}></intervention-parameter-view></span> </template> </template> </div> </template> <script src=intervention-view-single-compact.js></script> </dom-module>'},,,,,,,,,function(e){e.exports='<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/polymer-themes/ice.html> <link rel=import href=../bower_components/paper-button/paper-button.html> <link rel=import href=../bower_components/paper-input/paper-textarea.html> <link rel=import href=../bower_components/paper-card/paper-card.html> <link rel=import href=../bower_components/paper-tabs/paper-tabs.html> <link rel=import href=../bower_components/iron-pages/iron-pages.html> <link rel=import href=../bower_components/paper-toggle-button/paper-toggle-button.html> <link rel=import href=../bower_components/paper-checkbox/paper-checkbox.html> <dom-module id=popup-view> <template> <custom-style> <style is=custom-style>:host{width:600px;height:580px;--paper-card:{margin-bottom:10px;display:block;padding:5px 5px 5px 5px};}.popup_view_outer_div{width:600px;height:580px}.flexcontainer{display:flex;justify-content:flex-end}.box{padding:1em}.title{font-family:Verdana,Geneva,Tahoma,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;padding-left:.3em;padding-bottom:.5em;padding-top:.5em}.interventionContainer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-top:.3em;padding-bottom:.3em;padding-left:.3em;font-family:Verdana,Geneva,Tahoma,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;margin:.3em;margin-top:.5em;font-size:12px}.goalsContainer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-top:.3em;padding-bottom:.3em;padding-left:.3em;font-family:Verdana,Geneva,Tahoma,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;margin:.3em;margin-top:.5em;font-size:12px}#enabledInterventions{padding-top:.3em;padding-bottom:.3em;padding-left:.3em;font-family:Verdana,Geneva,Tahoma,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;margin:.3em;margin-top:.5em;font-size:12px}.interventionName{margin-left:10px}.feedbackcontents{margin:5px}.paperbuttons{margin-right:0;margin-left:10px;margin-bottom:10px;--paper-button:{color:#fff;background-color:#fff};--paper-button-flat-keyboard-focus:{font-weight:400};--paper-button-raised-keyboard-focus:{font-weight:400};}#settingsPage{max-width:400px;font-size:12px}.iview{padding-top:5px}</style> </custom-style> <div class=popup_view_outer_div> <div class=box> <paper-toggle-button checked={{is_habitlab_disabled}} style=float:left;margin-top:5px;margin-left:5px on-change=disable_habitlab_changed><span style=color:#fff>Turn Off HabitLab Today</span></paper-toggle-button> <div class=flexcontainer> <paper-button class=paperbuttons raised id=debugButton style=display:none on-click=debug_button_clicked>Debug</paper-button> <paper-button class=paperbuttons raised id=feedbackButton on-click=submit_feedback_clicked>Feedback</paper-button> <paper-button class=paperbuttons raised on-click=results_button_clicked>Results</paper-button> <paper-button class=paperbuttons raised on-click=settings_button_clicked>Settings</paper-button> </div> <template is=dom-if if={{!is_habitlab_disabled}}> <paper-card> <paper-tabs selected={{selected_tab_idx}}> <paper-tab>Active Nudge</paper-tab> <paper-tab>Available Goals and Nudges</paper-tab> </paper-tabs> <iron-pages selected={{selected_tab_idx}}> <iron-page id=currentInterventionPage> <div class=interventioninfo> <template is=dom-repeat items={{enabledInterventions}} as=intervention> <div class=interventionContainer> <span class=interventionName>{{get_intervention_description(intervention, intervention_name_to_info)}}</span> <paper-button raised on-click=temp_disable_button_clicked intervention={{intervention}}>Turn Off Nudge</paper-button> </div> </template> <template is=dom-if if={{isEmpty(enabledInterventions)}}> <template is=dom-if if={{outside_work_hours()}}> <div class=interventionContainer> <h4>No nudges being shown outside work hours</h4> <paper-button class=paperbuttons raised on-click=settings_button_clicked>Change Work Hours</paper-button> </div> </template> <template is=dom-if if={{!outside_work_hours()}}> <div class=interventionContainer> <h4>No nudges enabled, please enable some goals</h4> </div> </template> </template> </div> </iron-page> <iron-page id=settingsPage> <template is=dom-repeat items={{goals_and_interventions}} as=goal_and_interventions> <paper-toggle-button on-change=goal_enable_button_changed goal={{goal_and_interventions.goal}} checked={{goal_and_interventions.enabled}}>{{goal_and_interventions.goal.description}}</paper-toggle-button> <br> <template is=dom-if if={{goal_and_interventions.enabled}}> <div style=margin-left:10px;margin-right:10px;font-size:14px> Each time you visit <span>{{goal_and_interventions.goal.sitename_printable}}</span>, HabitLab will deploy one of the enabled nudges: <iron-icon icon=help style=color:#415D67;cursor:pointer;width:20px;height:20px on-click=help_icon_clicked></iron-icon> </div> <br> <template is=dom-repeat items={{goal_and_interventions.interventions}} as=intervention> <intervention-view-single-compact class=iview compact=true goal={{goal_and_interventions.goal}} intervention={{intervention}}></intervention-view-single-compact> <br> </template> </template> </template> </iron-page> </iron-pages> </paper-card> <paper-card> <graph-donut-top-sites style=margin-bottom:10px></graph-donut-top-sites> </paper-card> </template> <template is=dom-if if={{is_habitlab_disabled}}> <paper-card style=cursor:pointer on-click=enable_habitlab_button_clicked> <div style=width:100%> <div style=margin-top:10px;font-size:36px;text-align:center>You\'ve disabled HabitLab today.<br>Click to re-enable</div> <div style="margin:20px;width:calc(100% - 40px);height:300px;display:flex;justify-content:center"> <img style=display:inline-block;width:100%;text-align:center src={{get_power_icon_src()}}> </div> </div> </paper-card> </template> </div> </div> </template> <script src=popup-view.js></script> </dom-module> '},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var a,i,o,s,l,d,p,c,m,u,h,_,f,y,v,w;a=n(5),i=a.get_enabled_interventions,o=a.set_intervention_enabled,s=a.set_intervention_disabled,l=a.set_intervention_automatically_managed,d=a.set_intervention_manually_managed,p=a.get_intervention_parameters,c=a.set_intervention_parameter,m=a.set_override_enabled_interventions_once,u=a.list_custom_interventions,h=a.get_interventions,_=n(7).add_log_interventions,f=n(28).localstorage_getbool,a=n(18),y=a.get_active_tab_info,v=a.list_currently_loaded_interventions_for_tabid,w=n(2).polymer_ext,w({is:'intervention-view-single-compact',properties:{intervention:{type:Object,observer:'intervention_property_changed'},enabled:{type:Boolean,observer:'enabled_changed'},pill_button_idx:{type:Number,computed:'get_pill_button_idx(enabled)'},goal:{type:Object},sitename:{type:String,computed:'compute_sitename(goal)'},custom:{type:Boolean,computed:'compute_custom(intervention)'},isdemo:{type:Boolean,observer:'isdemo_changed'}},isdemo_changed:async function(e){if(e)return this.intervention=(await h())['facebook/remove_news_feed']},compute_custom:function(e){return!0===e.custom},compute_sitename:function(e){return e.sitename_printable},intervention_property_changed:function(e){return null==e?void 0:this.enabled=e.enabled},get_intervention_icon_url:function(e){var t;return t=null==e.generic_intervention?!0===e.custom?'icons/custom_intervention_icon.svg':'interventions/'+e.name+'/icon.svg':'interventions/'+e.generic_intervention+'/icon.svg',chrome.extension.getURL(t).toString()},enabled_changed:function(e){return this.intervention.enabled=e},display_internal_names_for_interventions:function(){return f('intervention_view_show_internal_names')},is_generic_intervention:async function(e){var t,n,a,i;return t=await h(),n=!1,a=t[e],null!=a.generic_intervention&&(i=!0),i},is_generic_intervention_sync:function(e,t){return t(e)},pill_button_selected:async function(e){var t,n,a,l;return(t=e.detail.buttonidx,1===t)?(this.enabled=!0,n=await i(),await o(this.intervention.name),a=await y(),l=await v(a.id),_({type:'intervention_set_smartly_managed',page:'popup-view',subpage:'intervention-view-single-compact',category:'intervention_enabledisable',now_enabled:!0,is_permanent:!0,manual:!0,intervention_name:this.intervention.name,url:window.location.href,tab_url:a.url,interventions_loaded:l,prev_enabled_interventions:n})):0===t?(this.enabled=!1,n=await i(),await s(this.intervention.name),a=await y(),l=await v(a.id),_({type:'intervention_set_always_disabled',page:'popup-view',subpage:'intervention-view-single-compact',category:'intervention_enabledisable',now_enabled:!1,is_permanent:!0,manual:!0,intervention_name:this.intervention.name,url:window.location.href,tab_url:a.url,interventions_loaded:l,prev_enabled_interventions:n})):void 0},get_pill_button_idx:function(e){return e?1:0},preview_intervention:function(){var e,t,n;return e=this.intervention.name,m(e),t=null==(n=this.intervention.preview)?null==(n=this.goal.preview)?this.goal.homepage:n:n,chrome.tabs.create({url:t})},parameters_shown:function(){return f('intervention_view_show_parameters')},edit_custom_intervention:function(){return localStorage.setItem('intervention_editor_open_intervention_name',JSON.stringify(this.intervention.name)),chrome.tabs.create({url:chrome.extension.getURL('index.html?tag=intervention-editor')})}})},,,,,,,,function(e,t,n){function a(e,t,n){function i(e,t,d){var p,c,m,u,h,_,f,y;if(null==e||null==t)return e===t;if(e.__placeholder__||t.__placeholder__)return!0;if(e===t)return 0!==e||1/e==1/t;if(p=o.call(e),o.call(t)!=p)return!1;switch(p){case'[object String]':return e==t+'';case'[object Number]':return e==+e?0==e?1/e==1/t:e==+t:t!=+t;case'[object Date]':case'[object Boolean]':return+e==+t;case'[object RegExp]':return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase;}if('object'!=typeof e||'object'!=typeof t)return!1;for(c=d.length;c--;)if(d[c]==e)return!0;if(d.push(e),m=0,u=!0,'[object Array]'!=p){if('constructor'in e!='constructor'in t||e.constructor!=t.constructor)return!1;for(f in e)if(s(e,f)&&(m++,!(u=s(t,f)&&i(e[f],t[f],d))))break;if(u){for(f in y=0,t)s(t,f)&&++y;l?'<<='===n?u=m<y:'<=='===n?u=m<=y:u=m===y:(l=!1,u=m===y)}}else if(h=e.length,_=t.length,(l?('==='===n?u=h===_:'<=='===n?u=h<=_:'<<='===n?u=h<_:void 0,m=h,l=!1):(u=h===_,m=h),u))for(;m--&&!!(u=m in e==m in t&&i(e[m],t[m],d)););return d.pop(),u}var o={}.toString,a={}.hasOwnProperty,s=function(e,t){return a.call(e,t)},l=!0;return i(e,t,[])}var i,o,s,l,d,p,c,m,u,h,_,f,y,v,w,k,C,S,j,z,A,T,E,I,P,F,D,L,M,R,H,N,O,B,V,U,q,G,W,Y,$;i=n(2).polymer_ext,o=n(30).load_css_file,s=n(7),l=s.add_log_feedback,d=s.add_log_interventions,p=s.add_log_habitlab_disabled,c=s.add_log_habitlab_enabled,m=null,u=async function(){return null==m?(m=await SystemJS['import']('sweetalert2'),m):m},h=null,_=async function(){return null==h?(h=await SystemJS['import']('libs_common/screenshot_utils'),h):h},s=n(18),f=s.get_active_tab_url,y=s.get_active_tab_id,v=s.list_currently_loaded_interventions,w=s.list_currently_loaded_interventions_for_tabid,k=s.get_active_tab_info,C=s.disable_interventions_in_active_tab,S=s.open_debug_page_for_tab_id,S=n(176).open_debug_page_for_tab_id,j=n(11).url_to_domain,s=n(5),z=s.set_intervention_disabled,A=s.list_enabled_interventions_for_location,T=s.set_intervention_disabled_permanently,E=s.get_enabled_interventions,I=s.set_intervention_enabled,P=s.get_goals_and_interventions,F=s.list_available_interventions_for_location,D=s.get_interventions,L=s.is_it_outside_work_hours,M=n(31).get_seconds_spent_on_all_domains_today,s=n(87),R=s.is_habitlab_enabled,H=s.disable_habitlab,N=s.enable_habitlab,s=n(4),O=s.list_sites_for_which_goals_are_enabled,B=s.list_goals_for_site,V=s.set_goal_enabled,U=s.set_goal_disabled,q=s.add_enable_custom_goal_reduce_time_on_domain,s=n(28),G=s.localstorage_getjson,W=s.localstorage_setjson,Y=s.localstorage_getbool,$=s.localstorage_setbool,i({is:'popup-view',properties:{enabledInterventions:{type:Array},feedbackText:{type:String,notify:!0},graphOptions:{type:Array},shownGraphs:{type:Array},graphNamesToOptions:{type:Object},blacklist:{type:Object},sites:{type:Array},html_for_shown_graphs:{type:String,computed:'compute_html_for_shown_graphs(shownGraphs, blacklist, sites)'},selected_tab_idx:{type:Number,value:0},selected_graph_tab:{type:Number,value:0},goals_and_interventions:{type:Array,value:[]},intervention_name_to_info:{type:Object,value:{}},is_habitlab_disabled:{type:Boolean}},get_intervention_description:function(e,t){return t[e].description},noValidInterventions:function(){return a(this.goals_and_interventions.length,0,'===')},temp_disable_button_clicked:async function(e){var t,n,a,i,o,s,l,p,c,m;for(t=this,n=e.target.intervention,a=await E(),i=await k(),o=i.url,s=await w(i.id),l=[],(p=0,c=s.length);p<c;++p)m=s[p],m!==n&&l.push(m);return s=l,t.enabledInterventions=s,await C(),this.fire('disable_intervention'),d({type:'intervention_set_temporarily_disabled',page:'popup-view',subpage:'popup-view-active-intervention-tab',category:'intervention_enabledisable',now_enabled:!1,is_permanent:!1,manual:!0,url:window.location.href,tab_url:o,intervention_name:n,prev_enabled_interventions:a})},perm_disable_button_clicked:async function(e){var t,n,a,i,o,s,l,p,c,m;for(t=this,n=e.target.intervention,a=await E(),await T(n),i=await k(),o=i.url,s=await w(i.id),l=[],(p=0,c=s.length);p<c;++p)m=s[p],m!==n&&l.push(m);return s=l,t.enabledInterventions=s,await C(),this.fire('disable_intervention'),d({type:'intervention_set_permanently_disabled',page:'popup-view',subpage:'popup-view-active-intervention-tab',category:'intervention_enabledisable',now_enabled:!1,is_permanent:!1,manual:!0,url:window.location.href,tab_url:o,intervention_name:n,prev_enabled_interventions:a})},is_not_in_blacklist:function(e,t,n){return e=n[e],!1===t[e]},checkbox_checked_handler:function(e){var t,n;return t=this,n=e.target.graph,t.blacklist[t.graphNamesToOptions[n]]=!e.target.checked,t.blacklist=JSON.parse(JSON.stringify(t.blacklist)),W('popup_view_graph_blacklist',t.blacklist)},sortableupdated:function(){var e=this,t,n;return t=this,n=this.$$('#graphlist_sortable').innerText.split('\n').map(function(e){return e.trim()}).filter(function(e){return''!==e}),this.shownGraphs=n.map(function(e){return t.graphNamesToOptions[e]})},compute_html_for_shown_graphs:function(e,t,n){var a,i,o,s,l,d,p,c;for(a=this,e=e.filter(function(e){return!a.blacklist[e]}),i='<div class="card-content">',(o=0,s=e.length);o<s;++o)if(l=e[o],'site-goal-view'===l)for(d=0,p=n.length;d<p;++d)c=n[d],i+='<'+l+' site="'+c+'"></'+l+'><br>';else i+='<'+l+'></'+l+'><br>';return i+='</div>',i},isEmpty:function(e){return null!=e&&0===e.length},outside_work_hours:function(){return L()},disable_habitlab_changed:async function(e){var t,n;return e.target.checked?(this.is_habitlab_disabled=!0,H(),t=await k(),n=await w(t.id),p({page:'popup-view',reason:'disable_button_slider_toggle',tab_info:t,url:null==t?void 0:t.url,loaded_interventions:n,loaded_intervention:n[0]})):(this.is_habitlab_disabled=!1,N(),t=await k(),n=await w(t.id),c({page:'popup-view',reason:'disable_button_slider_toggle',tab_info:t,url:null==t?void 0:t.url,loaded_interventions:n}))},enable_habitlab_button_clicked:async function(){var e,t;return this.is_habitlab_disabled=!1,N(),e=await k(),t=await w(e.id),c({page:'popup-view',reason:'enable_habitlab_big_button_clicked',tab_info:e,loaded_interventions:t})},goal_enable_button_changed:async function(e){var t;return t=e.target.goal,e.target.checked?(null==t.name?await q(t.domain):await V(t.name),await this.set_goals_and_interventions()):(await U(t.name),await this.set_goals_and_interventions())},set_goals_and_interventions:async function(){var e,t,n,a,i,o,s,l,d,p,c,m,u;return e=O(),t=v(),n=D(),a=P(),i=f(),o=await Promise.all([e,t,n,a,i]),s=o[0],l=o[1],d=o[2],p=o[3],c=o[4],this.sites=s,this.enabledInterventions=l,this.intervention_name_to_info=d,m=j(c),u=p.filter(function(e){return e.goal.domain===m}),0===u.length&&(u=[{enabled:!1,goal:{domain:m,description:'Spend less time on '+m}}]),this.goals_and_interventions=u},get_power_icon_src:function(){return chrome.extension.getURL('icons/power_button.svg')},debug_button_clicked:async function(){var e;return e=await y(),await S(e)},submit_feedback_clicked:async function(){var e,t,n,a;return e=await _(),t=await e.get_screenshot_as_base64(),n=await e.get_data_for_feedback(),a=document.createElement('feedback-form'),document.body.appendChild(a),a.screenshot=t,a.other=n,a.open()},help_icon_clicked:async function(){var e;return await o('bower_components/sweetalert2/dist/sweetalert2.css'),e=await u(),e({title:'How HabitLab Works',html:'HabitLab will help you achieve your goal by showing you a different <i>nudge</i>, like a news feed blocker or a delayed page loader, each time you visit your goal site.\n<br><br>\nAt first, HabitLab will show you a random nudge each visit, and over time it will learn what works most effectively for you.\n<br><br>\nEach visit, HabitLab will test a new nudge and measure how much time you spend on the site. Then it determines the efficacy of each nudge by comparing the time spent per visit when that nudge was deployed, compared to when other nudges are deployed. HabitLab uses an algorithmic technique called <a href="https://en.wikipedia.org/wiki/Multi-armed_bandit" target="_blank">multi-armed-bandit</a> to learn which nudges work best and choose which nudges to deploy, to minimize your time wasted online.',allowOutsideClick:!0,allowEscapeKey:!0})},results_button_clicked:function(){return chrome.tabs.create({url:'options.html#overview'})},settings_button_clicked:function(){return chrome.tabs.create({url:'options.html#settings'})},ready:async function(){var e,t;return e=this,R().then(function(t){return e.is_habitlab_disabled=!t}),await this.set_goals_and_interventions(),t=0<e.enabledInterventions.map(function(t){return e.intervention_name_to_info[t]}).filter(function(e){return null==e?void 0:e.custom}).length,0<e.enabledInterventions.length&&(Y('enable_debug_terminal')||t)&&e.S('#debugButton').show(),0===e.enabledInterventions.length&&(e.selected_tab_idx=1),$('popup_view_has_been_opened',!0),setTimeout(async function(){return n(36),n(70),n(130),n(377),n(129),await _(),await u()},1)}},{source:n(10),methods:['S']})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){(function(e){return e()})(function(){var e,t;window.global_exports={},window.addEventListener('unhandledrejection',function(e){throw e.reason}),e=window.dlog=function(){var e,t,n,a;for(t=[],n=0,a=arguments.length;n<a;++n)t.push(arguments[n]);if(e=t,'true'===localStorage.getItem('display_dlog'))return console.log.apply(console,e)},n(131),t=n(7).log_pageview,'/popup.html'===window.location.pathname&&(n(383),n(132),t({to:'popup'}))})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(632)}]);