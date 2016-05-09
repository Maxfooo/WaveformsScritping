// https://reference.digilentinc.com/waveforms3/refmanual#code

function main() {
	if(!('Wavegen1' in this) || !('Patterns1' in this) || !('Scope1' in this)) 
	{
		throw("Please open Wavegen and Patterns instrument");
	}
   Wavegen1.Channel1.Simple.Type.text = 'Sine';
   Wavegen1.Channel1.Simple.Frequency.value = 5000;
   Wavegen1.Channel1.Simple.Amplitude.value = 3.3;
   Wavegen1.Channel1.Simple.Offset.value = 1.65;
   
   Wavegen1.run()
   for(var idx = 0; wait(1) && idx < 10; idx++)
   {
      Scope1.single();
      var data = Scope1.Channel1.data;
      data = data / 3.3 * 4095;
      data.toString(2);
      print(data);
   }
   
}
main();
