import axios from 'axios';

export const postRequest = (data: any) => {
    axios.post('http://localhost:8100', data)
        .then((response: any) => {
            console.log('Response:', JSON.stringify(response));
        })
        .catch((error: any) => {
            console.error('Error:', error);
        });
}