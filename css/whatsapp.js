function whatsapp(){
    var name =document.getElementById("name").value;
    var cname =document.getElementById("cname").value;

    var subject =document.getElementById("Subject").value;
    var desc =document.getElementById("desc").value;

    var url="https://wa.me/917666495016?text=" 
    +"Name : "+name+"%0a"
    +"cname : "+cname+"%0a"
    +"subject : "+subject+"%0a"
    +"desc : "+desc;
    window.open(url,'_blank').focus();

}
