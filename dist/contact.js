ready(()=>{
	
})

const sendContactInfo = (req) =>{
	const xhttp = new XMLHttpRequest 
	const host = "https://postman-echo.com/post"
	xhttp.open("POST", "host", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("fname=Henry&lname=Ford");
}