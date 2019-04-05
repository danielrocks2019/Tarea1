function ejercicio2(año)
{
   var año=año;
   if(año<=0)
   {
   	console.log("0 no es un año para calcular siglos");
   }
   else if(año<=100){
   	console.log("Siglo 1");
   }
   else if(año%100==0){
   	console.log(a/100 + " siglos");
   }
   else{
   	console.log( ((año/100)+1)+" siglos");
   }

}

console.log(ejercicio2(2000));