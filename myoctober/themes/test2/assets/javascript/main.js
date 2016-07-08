
function getBuy() {
    var start = "[buy-button sku=";
    var end = "[/buy-button]";
    var text = document.getElementById('getTextButton2').value;
    var skus = document.getElementById('getTextButton').value;
    var buyButton = start+skus+']'+text+end;
    document.getElementById('getText2').value = buyButton;
}

function getText() {
    var theText = document.getElementById('inputText').value;
    var font = document.getElementById('textinp1').value;
    var fontsize = document.getElementById('textinp2').value;
    var fontstyle = document.getElementById('textinp3').value;
    var fontcolor = document.getElementById('textinp4').value;
    var textalign = document.getElementById('textinp5').value;
    var contwidth = document.getElementById('textinp6').value;
    var start = "<div style=\"font-size:";
    var colorvar = "; color:";
    var textalignvar = "; text-align:";
    var widthvar = "; width:";
    var endvar = ";\">";
    var startformat = "<"+fontstyle+">";
    var endformat = "</"+fontstyle+">";
    var theFinish = start+fontsize+colorvar+fontcolor+'; font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif'+textalignvar+textalign+widthvar+contwidth+endvar+startformat+theText+endformat+'</div>';
   // alert(theFinish);
    document.getElementById('getText').value = theFinish;
}

function getList() {
    var togstart = "[toggle-container]";
    var togend = "[/toggle-container]";
    
}

function getShortcode(){
    var instmems = document.getElementById('shortinp').value;
    var promems  = document.getElementById('shortinp2').value;
    var commmems= document.getElementById('shortinp3').value;
    var nonmems  = document.getElementById('shortinp4').value;
    var paymems  = document.getElementById('shortinp5').value;
    var nonpaymems  = document.getElementById('shortinp6').value;
    if(instmems != '') {
        document.getElementById('instmember').value = '[show-to-institutional-member]' + instmems + '[/show-to-institutional-member]';
    }
    if(promems != ''){
        document.getElementById('promember').value = '[show-to-professional-member]'+promems+'[/show-to-professional-member]';
    }
    if(commmems != '') {
        document.getElementById('commember').value = '[show-to-community-member]' + commmems + '[/show-to-community-member]';
    }
    if(nonmems != '') {
        document.getElementById('nonmember').value = '[show-to-non-member]' + nonmems + '[/show-to-non-member]';
    }
    if(paymems != '') {
        document.getElementById('paymember').value = '[show-to-paying]' + paymems + '[/show-to-paying]';
    }
    if(nonpaymems != '') {
        document.getElementById('nopaymember').value = '[show-to-non-paying]' + nonpaymems + '[/show-to-non-paying]';
    }
    }