function openModal(formId) {
    var form = document.getElementById(formId);

    // Get the values of the input fields
    var firstNameValue = form.elements['first_name'].value;
    var lastNameValue = form.elements['last_name'].value;
    var emailValue = form.elements['e_mail'].value;
    var jobRoleValue = form.elements['job_role'].value;
    var addressValue = form.elements['address'].value;
    var cityValue = form.elements['city'].value; 
    var pincodeValue = form.elements['pincode'].value;
    var dateValue = form.elements['date'].value;
    // Display the input data in the modal
    var modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = '<p><strong>First Name:</strong> ' + firstNameValue + '</p>' +
                              '<p><strong>Last Name:</strong> ' + lastNameValue + '</p>' +
                              '<p><strong>Email:</strong> ' + emailValue + '</p>' + 
                              '<p><strong>Job Role:</strong> ' + jobRoleValue + '</p>' +
                              '<p><strong>Address:</strong> ' + addressValue + '</p>' +
                              '<p><strong>City:</strong> ' + cityValue + '</p>' +
                              '<p><strong>Pincode:</strong> ' + pincodeValue + '</p>' +
                              '<p><strong>Date:</strong> ' + dateValue + '</p>' ;

    // Show the modal
    var modal = document.getElementById('myModal');
    modal.style.display = 'flex';
  }

  function closeModal() {
    // Hide the modal
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }