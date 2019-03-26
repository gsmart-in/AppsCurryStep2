function doGet() 
{
	var output = 'Today is '+AppLib.getTodaysDateLongForm()+"\n\n";
	output += "My launch date is "+AppLib.getDaysToAnotherDate(2020,3,1)+"\n\n";
	output += "\n\n";
	output += "Random Numbers using lodash\n\n";
	output += AppLib.printSomeNumbers();
	return ContentService.createTextOutput(output);

}