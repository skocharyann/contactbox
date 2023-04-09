const form =  document.querySelector("#form");
const userTable =  document.querySelector(".user-table");
const container =  document.querySelector(".container");
const textArea =  document.querySelector("#text");


form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const { fullname,email,tel,text} = e.target;
    const user = {
        id:Date.now(),
        fullname: fullname.value,
        email: email.value,
        tel: tel.value,
        text: text.value
    };
    

    container.style.display ="block";

    const rows  =  document.createElement("tr");
    rows.innerHTML = `
    <td>${user.id?.toString().slice(-4)}</td>
    <td>${user.fullname}</td>
    <td>${user.email}</td>
    <td>${user.tel}</td>
    <td>${user.text}</td>
    `
   
  userTable.append(rows)
  
});
