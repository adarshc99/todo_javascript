"use strict"
var a = 0;
var array_store = [];
var store_update;
function show()
{
   let item_display ="";
   document.getElementById("display1").innerHTML = "";
   for(let i=0;i<array_store.length;i++)
   {
      item_display += `<div id = ${array_store[i]["id"]}> 
                  ${array_store[i]["value"]}
                  <a href = # onclick = delete1(${array_store[i]["id"]})>delete</a>
                  <a href = # onclick = update1(${array_store[i]["id"]})>update</a>
                  </div>`;
     
   }
   document.getElementById("display1").innerHTML += item_display;
      
}
function update()
{
   array_store[store_update]["value"] = document.getElementById("input_text").value;
   document.getElementById("update_hide").style.display = "none";
   document.getElementById("update").style.display = "inline";
   document.getElementById("input_text").value = "";
   console.log("hello");
   show();
  
}

function add()
{
   array_store.push({"id":a,"value":document.getElementById("input_text").value});
   a+=1;
   document.getElementById("input_text").value = "";
   show();                             
}
function delete1(get_id)
{
   console.log(get_id);
   document.getElementById(get_id).style.display = "none";
   for(let i=0 ;i<array_store.length;i++)
   {
      if(array_store[i]["id"] == get_id)
      {
         array_store.splice(i,1);
      }
   }
   console.log(array_store);
}
function update1(get_id)
{
   document.getElementById("update_hide").style.display = "inline";
   document.getElementById("update").style.display = "none";
   for(let i=0;i<array_store.length;i++)
   {
      if(array_store[i]["id"] == get_id)
      {
         document.getElementById("input_text").value = array_store[i]["value"];
         store_update = i;
         console.log(i);
         break;
      }
   }
}
