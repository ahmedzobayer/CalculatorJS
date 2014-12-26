var val;
function disp(val)
{
	document.frm.display.value+= val;
}

function clr()
{
	document.frm.display.value="";
}

function calc()
{
	document.frm.display.value=eval(document.frm.display.value);
}