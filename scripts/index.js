var api = '4b1aa94b0ae5630030c4c6f37a0b96ac';
function symbolList(){
    $.ajax({
      
      'url':'https://financialmodelingprep.com/api/v3/company/stock/list',
      'type':'GET',
      'crossDomain':true,
      'datatype':'JSON',
      success:function(result){
        var list = result.symbolsList;
        var symbols = [];
        for(var i=0;i<list.length;i++){
            symbols.push(list[i].symbol);
        }
        var tickerdiv;
        var line;
        for(i=0;i<100;i++){
          $.ajax({
             'url':'https://financialmodelingprep.com/api/v3/company/profile/'+symbols[i],
             'type':'GET',
             'crossDomain': true,
             'datatype':'JSON',
             success:function(data){
              tickerdiv="";
              tickerdiv += '<div class="ticker-item">'+data.symbol+'</div>';
              tickerdiv += '<div class="ticker-item">'+data.profile["price"]+'</div>';
             
              if(data.profile["changes"]>0)
              {
   tickerdiv += '<div class="ticker-item" style="color:green">'+data.profile["changes"]+'</div>';
              }
              else
              {
                tickerdiv += '<div class="ticker-item" style="color:red">'+data.profile["changes"]+'</div>';
              }
              tickerdiv += '<div class="vl" style="height:30px; border-right:2px solid #3498db">';
              tickerdiv += '</div';
            
            $('.ticker-move').append(tickerdiv);
               $(tickerdiv).append(line);
              }
             });
      }
        }
       });
  }
  symbolList();