// https://reference.digilentinc.com/waveforms3/refmanual#codeTool



function main() {
   var maxVal = Math.pow(2,12);
   var stepVal = 0;
   ch = Scope1.Channel1;
   mtr = Meter.Meters.C1DC
   var filePath = "C:/Users/maxr/Desktop/WaveformWorkspace/";
   var fileName = "measureDAC"
   var averageTestFile = File(filePath+fileName+"_Averages"+".csv");


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
      print(mtr.value);
      //print(ch.measure("Average"));
      //averageTestFile.appendLine(ch.measure("Average"));
      averageTestFile.appendLine(mtr.value);      
   }
   
   Patterns1.stop();
   Scope1.stop();
}
main();
