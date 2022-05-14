let number = '<table border="1"">'
for(i=1;i<10;i++){
     number = number + '<tr>'
         for (j=2;j<10;j++){
              number = number + '<td >' + j + 'x' + i + ' = ' + j*i + '</td>';
         }
         number = number + '</tr>'
}
number = number + '</table>'
document.write(number)


