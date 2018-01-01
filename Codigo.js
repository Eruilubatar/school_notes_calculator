var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");
var texto3 = document.getElementById("texto3");
var texto4 = document.getElementById("texto4");
var texto5 = document.getElementById("texto5");
var boton_mortal = document.getElementById("boton_mortal");
var numero_de_periodos = 5;
var Nota_final ;
 boton_mortal.addEventListener("click",prueba);

 function prueba ()
 {
   Nota_final = (parseFloat(texto1.value) + parseFloat(texto2.value) + parseFloat(texto3.value) + parseFloat(texto4.value) + parseFloat(texto5.value)) / numero_de_periodos

   if(Nota_final <= 3.49)
   {
   alert("Tu nota final  es: " + Nota_final + " \n Bajo Manco hp");
   }
   else if(Nota_final <= 4.0)
   {
   alert("Tu nota final  es: " + Nota_final + " \n Basico puede mejorar" );
   }
   else if(Nota_final <= 4.59)
   {
   alert("Tu nota final  es: " + Nota_final + " \n Alto pero no se crea mucho");
   }
   else if(Nota_final <= 5.0)
   {
   alert("Tu nota final  es:  " + Nota_final + " \n Superior ojala pierda la proxima :p ");
   }
   else if(Nota_final >= 5.01)
   {
   alert("\n PONGA BIEN LAS NOTAS Y DEJE DE JODER, RECUERDE QUE LA ESCALA ES DE 0.0 A 5.0")
   }

 }
