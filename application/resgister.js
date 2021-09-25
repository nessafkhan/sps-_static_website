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
  
  errorPlacement: function(error,element){
    if(element.is(":checkbox")){
        error.appendTo(element.parents(".agree"));
    }else{
         error.insertAfter( element );
    }
},
});

