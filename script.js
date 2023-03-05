// var ary = [10, 20, 30, 40, 50]
//     document.write("<ul>");
//     for (a = 0; a <= 7; a++) {
//         document.write("<li>" + ary[a] + "</li>");
//     }
//     document.write("</ul>");



//     var a= new Array(5);
//     var b=prompt("enter a value")






        for(var a = 1; a <= 5; a++){
            document.write(a +  "outer ");

          for(var b = 1; b <= a ; b++){
            document.write(b +  "inner ");
          }
          document.write("<br>");
        }
      















// const ary = [10, 20, 30, 40, 50];
// const list = ary.map(item => `<li>${item}</li>`).join("");
// document.write(`<ul>${list}</ul>`);