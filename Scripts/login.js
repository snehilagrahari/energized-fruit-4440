let form=document.querySelector("form");
form.addEventListener("submit",login);
let p=document.createElement("p");
p.innerText="**Incorrect Credentials**";
p.style.color="red";
p.style.fontSize="14px";
p.style.display="none";
p.style.textAlign="center";
p.style.marginTop="-15px";
form.append(p);

let userArr=JSON.parse(localStorage.getItem("user-details"))||[];
function login(event)
{
    event.preventDefault();
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    let flag=false;
    let name="";
    for(let i=0;i<userArr.length;i++)
    {
        if(userArr[i].pass==pass&&userArr[i].email==email)
        {
            flag=true;
            name=userArr[i].name;
            break;
        }
    }
    if(flag==false)
    {
        p.style.display="block";
        return;
    }
    else    
    {
        p.style.display="none";
        alert("Login Successful! Welcome "+name);
        window.location.assign("index.html");
        document.getElementById("email").value=null
        document.getElementById("pass").value=null
    }    
}