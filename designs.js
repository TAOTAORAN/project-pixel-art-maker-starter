// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function(){
    // 点击提交按钮，生成对应画布单元格
    $('#submit').click(function makeGrid(){
        // 定义变量，存放两个输入框的位置，提交按钮的位置
        let height, width, table;
        height = $('#inputHeight');
        width = $('#inputWidth');
        table = $('#pixelCanvas');
        // 每次生成新画布前先删除旧画布
        table.find('tr', 'td').remove();
        // 获取输入框的行数，循环生成对应数目的行数
        for(let m = 0; m < height.val(); m++){
            table.append('<tr></tr>');
        }
        // 获取输入框的列数，循环生成对应数目的列数
        for(let n = 0; n < width.val(); n++){
            $('tr').append('<td></td>')
        }
    })

    // 鼠标放置单元格上，边框变色作为提示。如果拾色器颜色是黑色，用灰色提示。否则用拾色器颜色提示。
    if($('#colorPicker').val()==='#000000'){
        $('#pixelCanvas').on('mouseenter', 'td', function(evt){
            $(evt.target).css('border-color','#aaa');
        });
        $('#pixelCanvas').on('mouseleave', 'td', function(evt){
            $(evt.target).css('border-color','black');
        });
    }
    else {
        $('#pixelCanvas').on('mouseenter', 'td', function(evt){
            let tipColor = $('#colorPicker').val();
            $(evt.target).css('border-color',tipColor);
        });
        $('#pixelCanvas').on('mouseleave', 'td', function(evt){
            $(evt.target).css('border-color','black');
        });
    }
    // 单击单元格后，背景变为拾色器颜色。
    $('#pixelCanvas').on('click', 'td', function(evt){
        let addColor = $('#colorPicker').val();
        $(evt.target).css('background',addColor);
    });
    // 双击清除单元格颜色
    $('#pixelCanvas').on('dblclick', 'td', function(evt){
        $(evt.target).css('background','white');
    });
});
