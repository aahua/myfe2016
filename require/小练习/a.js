define(["b"],function(isArray){
    function arrSore(arr){
        if(isArray(arr)){
            return arr.sort(function(a,b){
                return a - b;
            })
        }else{
            return "输入的不是数组！";
        }
    }
    return arrSore;
})/**
 * Created by sony on 2017/2/13.
 */
