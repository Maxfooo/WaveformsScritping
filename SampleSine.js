// https://reference.digilentinc.com/waveforms3/refmanual#codeTool



function main() {
   var maxVal = power(2, 12);
   var stepVal = 0;
   var numOfSamples = 5;
   var sample = 0;
   ch = Scope1.Channel1;
   var filePath = "C:/Users/maxr/Desktop/WaveformWorkspace/";
   var fileName = "measureDAC"
   var totalTestFile = File(filePath+fileName+".csv");
   var stepFileName = "Step_";
   var stepTestFile = File(filePath+stepFileName+stepVal+".csv");
   
	if(!('Patterns1' in this) && !('Scope1' in this)) 
	{
		throw("Please open Patterns and Scope instrument");
	}

   Patterns1.Channels.Bus1.Number.value = stepVal;
   Patterns1.run();
   Scope1.run();
   for(stepVal; stepVal < maxVal; stepVal++)
   {
     Patterns1.Channels.Bus1.Number.value = stepVal;
	  totalTestFile.appendLine(ch.data);
	  //stepTestFile.write(ch.data);
	  //stepTestFile = File(filePath+stepFileName+stepVal+".csv");
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
