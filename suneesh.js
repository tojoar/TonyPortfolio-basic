
    // <!-- Bootstrap v5.3 Libraries -->
    // <link   href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
    //         rel="stylesheet"
    //         integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
    //         crossorigin="anonymous"></link>

    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    //         integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    //         crossorigin="anonymous"></script>

function validateForm() {
    let x = document.getElementById("name").value;
    
    if (x.trim() == "") { 
    
    document.getElementById("one").innerHTML = "Name must be filled out";
    return false; 
    } else {
    document.getElementById("one").innerHTML = ""; 
    }
    
    let e = document.getElementById("email").value.trim(); 
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (!e.match(validRegex)) { 
    
    document.getElementById("two").innerHTML = "Invalid email address!";
    return false; 
    } else {
    document.getElementById("two").innerHTML = ""; 
    }
    
    let s = document.getElementById("subject").value;
    
    if (s.trim() == "") { 
    
    document.getElementById("three").innerHTML = "Subject must be filled out";
    return false; 
    } else {
    document.getElementById("three").innerHTML = ""; 
    }
    
    const textarea = document.getElementById("textarea");
    const error = document.getElementById("error");
    const value = textarea.value.trim();
    if (value.length == 0) {
    error.textContent = "Textarea is empty";
    return false; 
    } else if (value.length < 10) {
    error.textContent = "Textarea is too short";
    return false; 
    } else if (value.length > 1000) {
    error.textContent = "Textarea is too long";
    return false; 
    } else {
    error.textContent = ""; 
    }
    
    return true; 
}

// <!-- Google Sheets Submission-->
        $("#submit-form").submit((e)=>{
                e.preventDefault()
                $.ajax({
                    url:"https://script.google.com/macros/s/AKfycbwOxv_LsxU6iFK65w4BJFyy0i4_0MxHvBBhgCezFs0SMgHWBUX3AeOar5GB_UwUrUI7/exec",
                    data:$("#submit-form").serialize(),
                    method:"post",
                    success:function (response){
                        alert("Form submitted successfully")
                        window.location.reload()
                        //window.location.href="https://google.com"
                    },
                    error:function (err){
                        alert("Network Error")
                    }
                })
            })