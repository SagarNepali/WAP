document.getElementById("formSubmit").addEventListener("click", formSubmit);

function formSubmit() {
  let formObject = {
    CitizenID: document.getElementById("id").value,
    SSN: document.getElementById("ssn").value,
    FullName: document.getElementById("fullName").value,
    State: document.getElementById("state").value,
    Senior: document.querySelector('input[name="senior"]:checked')
      ? "Yes"
      : "No",
  };

  alert(
    "Citizen ID: " +
      formObject.CitizenID +
      "\nSSN: " +
      formObject.SSN +
      "\nFullName: " +
      formObject.FullName +
      "\nState: " +
      formObject.State +
      "\nSenior: " +
      formObject.Senior
  );
  console.log(formObject);
}
