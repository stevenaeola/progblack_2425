const form = document.getElementById('my_form');
form.addEventListener('submit', async function(event){
    event.preventDefault();
    const formData = new FormData(form);
    const formJSON = JSON.stringify(Object.fromEntries(formData.entries()));
    console.log("Form data", formJSON);
    const response = await fetch('/api/spider/add',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: formJSON
        });
})