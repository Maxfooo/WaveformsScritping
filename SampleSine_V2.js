// https://reference.digilentinc.com/waveforms3/refmanual#codeTool



function main() {
   var maxVal = power(2, 12);
   var stepVal = 0;
   ch = Scope1.Channel1;
   var filePath = "C:/Users/maxr/Desktop/WaveformWorkspace/";
   var fileName = "measureDAC"
   var averageTestFile = File(filePath+fileName+"_Averages"+".csv");


	if(!('Patterns1' in this) && !('Scope1' in this)) 
	{
		throw("Please open Patterns and Scope instrument");
	}

   Patterns1.Channels.Bus1.Number.value = stepVal;
   Patterns1.run();
   //Scope1.run();
   for(stepVal; stepVal < maxVal; stepVal++)
   {

   Patterns1.Channels.Bus1.Number.value = stepVal;
   averageTestFile.appendLine(ch.measure("Average"));
/*
   Scope1.single();
   Scope1.wait();
   Patterns1.Channels.Bus1.Number.value = stepVal;
   var data = ch.data;
   data.forEach(function(sample){average += sample})
   average /= data.length;
   averageTestFile.appendLine(average);
*/
   
	  
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
