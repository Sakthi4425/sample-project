function findCost()
 {
   var major=document.getElementById("major");
   var starters = document.getElementById("starters");
   var soft = document.getElementById("soft");
   var selectedItems="Item\t\t\t Price \n. \n";
   var totcost=0;
   for(var i=0;i<major.options.length; i++)
    {
     var option = major.options[i];
     if(option.selected==true)
       {
         var price = parseInt(option.value);
         totcost=totcost + price;
         selectedItems=selectedItems+option.text+"\t\t"+price+"\n";
        }
    }
 for(var i=0; i<starters.options.length;i++)
   {
     var option = starters.options[i];
     if(option.selected==true)
       {
          var price = parseInt(option.value);
          totcost=totcost + price;
          selectedItems=selectedItems+option.text+"\t\t"+price+"\n";
        }
    }
   var softdrinkIndex=soft.selectedIndex;if(softdrinkIndex!=-1)
    {
      var selectedSoftdrink=soft.options[soft.selectedIndex].text; 
      var price = parseInt(soft.options[soft.selectedIndex].value); 
      totcost=totcost+price;
      selectedItems=selectedItems+selectedSoftdrink+"\t\t\t"+price+"\n. \n";
    }
  selectedItems=selectedItems+"Total cost \t\t" + totcost+"\n. \n";
  document.getElementById("ordereditems").value=selectedItems;
 }