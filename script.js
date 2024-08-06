const getStart=()=>{
     window.location="service.html"
}

const projecttbed=()=>{
    window.location="projectdetail-bed.html"
}

const articlenews=()=>{
    window.location="blog.html"
}

const oncontact=()=>{
    window.location="contact.html" 
}

const projectbath=()=>{
    window.location="projectdetailbath.html"
}

const projecttkit=()=>{
    window.location="projectdetail-kitchen.html"
}

const blogde=()=>{
    window.location="blogdetail.html"
}

const contactt=()=>
{
    const name = NameId.value
    const email = EmailId.value
    const sub = SubjectId.value
    const phone = PhoneId.value
    const msg = MsgId.value

    if(name && email && sub && phone && msg){

        alert("Succefully submitted")
        
    }
    else{
        alert("Please fill the form completely!!!")
    }
}

const aboutt=()=>
    {
        const name = NameId.value
        const email = EmailId.value
    
        const msg = MsgId.value
    
        if(name && email  && msg){
    
            alert("Succefully submitted")
            
        }
        else{
            alert("Please fill the form completely!!!")
        }
    }

const prooject=()=>
{
    window.location="project.html"
}