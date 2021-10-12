const axios = require('axios');

export default function ({ $axios, redirect }) {
    return $axios.$get('https://api.superawesome.ml/api/auth').then(res => {
    
    }).catch(err => {
        console.log(err);
        if (err.response.status === 401) {
            redirect('/login');
        }
    })
}