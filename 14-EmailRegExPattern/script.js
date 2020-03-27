const inputall=document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{11}$/,
    username:/^[a-z\d]{5,12}$/i,
    password:/^[\w@-]{8,20}$/,
    slug:/^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
        //             yourname @ domain   .  com          ( .uk )
};


const validate=(field,regex)=>{
    console.log(regex.test(field.value));
    if(regex.test(field.value)){
        field.className='Valid';
    }else{
        field.className='Invalid'; 
    }
}

inputall.forEach((input) => {
    input.addEventListener('keyup',(e)=>{
        //    e.preventDefault();
        //   console.log(e.target.attributes.name.value);
       
        validate(e.target,patterns[e.target.attributes.name.value]);
    });
    
});