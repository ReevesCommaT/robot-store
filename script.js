$(function(){
  $('#contactTable tr').mouseover(function(){
    $(this).addClass('hover');
  });

  $('#contactTable tr').mouseout(function(){
    $(this).removeClass('hover');
  });
});

$(document).ready(function(){
  $('.hwTable tr').mouseover(function(){
  $(this).addClass('hover');
  });

  $('.hwTable tr').mouseout(function(){
    $(this).removeClass('hover');
  })
});

$(document).ready(function(){
  $('article').mouseover(function(){
  $(this).addClass('hover');
  });

  $('article').mouseout(function(){
    $(this).removeClass('hover');
  })
});

//Still need a script for search bar.

  for (var i=0;i<document.forms.length;i++) {
  var form = document.forms[i];
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var results = '';

   var checkboxes = form.querySelectorAll("input[type='checkbox']");
   for(var k = 0; k < checkboxes.length; k++) {
     results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
   }
   var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
   for(var m = 0; m < radiobuttons.length; m++) {
     results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';

   }
     console.log(results)
 });
};




/*
var robo = document.querySelector('#robo1').createShadowRoot();
/*Step1*/
//let prdTemplate = document.querySelector('#producttemplate');
/*Step2*/
//let clone = document.importNode(prdTemplate.content, true);
/*Step3*/

//clone.querySelector('#pimage').src = 'images/roboDog.png';
//clone.querySelector('#lblName').textContent = 'R.E.T';

/*Step4*/
/*
robo.appendChild(clone);
let userTemplate = document.querySelector('#user');
let userClone = document.importNode(userTemplate.content, true);
document.body.appendChild(userClone);
  let addressTemplate = document.querySelector('#address');
  let addressClone = document.importNode(addressTemplate.content, true);
document.body.appendChild(addressClone);
*/
