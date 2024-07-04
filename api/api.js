const baseUrl = window.location.href;
export function apiPost() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => console.log('apiPost', data));    

}

export function apiGet() {
    fetch('https://reqres.in/api/posts')
        .then(response => response.json())
        .then(data => console.log('apiGet', data));    

}

export function apiGetLocal() {
    fetch(baseUrl + 'api/user')
        .then(response => response.json())
        .then(data => console.log('apiGetLocal', data));    

}

export function apiPostLocal() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ id: '1', name: 'jose' })
    };
    fetch(baseUrl + 'api/user',requestOptions)
        .then(response => response.json())
        .then(data => console.log('apiPostLocal', data));    

}

export function apiPostLocalAlt() {
    fetch(baseUrl + "api/user", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        //make sure to serialize your JSON body
        body: JSON.stringify({ id: '1', name: 'jose' })
      })
      .then( (response) => { 
        console.log(response);
        console.log(response.json());
        // response.json()
      });  

}

export function apiGetSupa() {
    const requestOptions = {
        headers: { 'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmY3F5ZmlwbmhsYnJmYmVwdHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NDY5MzIsImV4cCI6MjAzNTUyMjkzMn0.ulqAGI6irj8n9ONM28BbNpvVlic0iPSt5m3rcbyogO0',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmY3F5ZmlwbmhsYnJmYmVwdHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NDY5MzIsImV4cCI6MjAzNTUyMjkzMn0.ulqAGI6irj8n9ONM28BbNpvVlic0iPSt5m3rcbyogO0',
         },
    };
    fetch('https://cfcqyfipnhlbrfbeptqx.supabase.co/rest/v1/products?select=*',requestOptions)
        .then(response => response.json())
        .then(data => console.log('apiGetSupa', data));    

}

export function apiPostSupa() {
    const requestOptions = {
        method: 'POST',
        headers: { 'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmY3F5ZmlwbmhsYnJmYmVwdHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NDY5MzIsImV4cCI6MjAzNTUyMjkzMn0.ulqAGI6irj8n9ONM28BbNpvVlic0iPSt5m3rcbyogO0',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmY3F5ZmlwbmhsYnJmYmVwdHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NDY5MzIsImV4cCI6MjAzNTUyMjkzMn0.ulqAGI6irj8n9ONM28BbNpvVlic0iPSt5m3rcbyogO0',
            'Content-Type':'application/json',
            'Prefer':'return=minimal',
         },
         body: JSON.stringify({ name: 'otro producto' })
    };
    fetch('https://cfcqyfipnhlbrfbeptqx.supabase.co/rest/v1/products',requestOptions)
        .then(response => response.json())
        .then(data => console.log('apiGetSupa', data));    

}