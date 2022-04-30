//PREVENT FORMS FROM SUBMITTING / PREVENT DEFAULT BEHAVIOUR
function preventFormSubmit() {
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function(event) {
            event.preventDefault();
        });
    }
}
window.addEventListener("load", preventFormSubmit, true);


//HANDLE FORM SUBMISSION
function handleFormSubmit(formObject) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxkMHyEMo0kLw7uoGlkHPDnfNYeeWzG-gXI6bKiaYIRPDV-9KLDNWRD0-M5hHiL3s5J3w/exec'

    formObject.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(formObject)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
    })

}
