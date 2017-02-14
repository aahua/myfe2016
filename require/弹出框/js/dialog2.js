/**
 * Created by sony on 2017/2/14.
 */
require.config({
    paths:{
        "jquery" : "jquery-1.12.4"
    }
});
define(["jqurey"],function($){
    return{
        open : function(options){
            var defaultSettings = {
                width :400,
                height:300,
                title:"������",
                content : ""
            };
            $.extend(defaultSettings,options);
            var html=
                '<div class="dialog-container">'
                + '<div class="dialog-mask"></div>'
                + '<div class="dialog-box">'
                + '<div class="dialog-title">'
                + '<div class="dialog-title-item">'+ defaultSettings.title +'</div>'
                + '<div class="dialog-title-close">[X]</div>'
                + '</div>'
                + '<div class="dialog-content"></div>'
                + '</div>'
                + '</div>';
            $("body").append(html);
            $(".dialog-box").css({
                width: defaultSettings.width,
                height: defaultSettings.height
            });
            $(".dialog-content").css({
                height:defaultSettings.height - 30
            })
            $(".dialog-content").load(defaultSettings.content);
            $(".dialog-title-close").on("click", function(){
                $(".dialog-container").remove();
            });
        }
    }
})