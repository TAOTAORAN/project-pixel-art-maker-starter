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
});
