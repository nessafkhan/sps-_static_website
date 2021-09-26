$("#registerForm").validate({
  rules: {
    applicantName: {
      required: true,
    },
    place: {
      required: true,
    },
    gender: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    gender: {
      required: true,
    },
    contact: {
      required: true,
      digits: true,
    },
    employementStatus: {
      required: true
    },
    educationalQualification: {
      required: true,
    },
    institutionName: {
      required: true,
    },
    graduationYear: {
      required: true,
      digits: true,
    },
    yourself: {
      required: true,
    },
    reasonSps: {
      required: true,
    },
    motivation: {
      required: true,
    },
    reasonSps: {
      required: true,
    },
    source: {
      required: true,
    },
    checkAgree: {
      required: true,
    },
  },
  

submitHandler: function(form){
  $.ajax({
    url:"https://script.google.com/macros/s/AKfycbxcHpaH37-TKqX4dDe7tI4-jZIMbuUoxYtPhWjauQj9M79PMiDv9GinzREK_Ub0xOCCHw/exec",
    data:$("#registerForm").serialize(),
    method:"post",
    success:function (response){
        $(".form-section").hide();
        $("#form-msg").html("Registration Completed Successfully")
        
        //window.location.href="https://google.com"
    },
    error:function (err){
        alert("Something Error")

    }
})
}
});

