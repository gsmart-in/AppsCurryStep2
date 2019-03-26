import * as moment from 'moment';
import _ from 'lodash';

function getObjectValues()
{
	let options = Object.assign({}, {source_url:null, header_row:1}, {content:"Hello, World"});

	return(JSON.stringify(options));
}

function getTodaysDateLongForm()
{
	return moment().format('LLLL');
}

function getDaysToAnotherDate(y,m,d)
{
	return moment().to([y,m,d]);
}

function printSomeNumbers()
{
	let out = _.times(6, ()=>
	{
		return _.padStart(_.random(1,100).toString(), 10, '.')+"\n\n"; 
	});

	return out;
}

export {
    getObjectValues,
    getTodaysDateLongForm,
    getDaysToAnotherDate,
    printSomeNumbers
}; 