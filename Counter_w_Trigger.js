function main() 
{
   var maxVal = power(2, 12);
   var stepVal = 0;

   Patterns1.Channels.Bus1.Number.value = stepVal;
   Patterns1.run();
   Scope1.run();

   for(stepVal; stepVal < maxVal; stepVal++)
   {
     Patterns1.Channels.Bus1.Number.value = stepVal;
     print(stepVal); 
     wait(0.01);
   }
   Patterns1.stop();
   Scope1.stop();
}

function power(base, raise) {
   var result = base;
   for(var i = 0; i < (raise - 1); i++)
   {
      result *= base;
   }
   return result;
}

main();
