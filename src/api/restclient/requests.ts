import axios from 'axios';

export const postRequest = async (data: any): Promise<any> => {
    try {
        const response = await axios.post('http://localhost:8100', data)
        console.log('Response:', JSON.stringify(response));
        return response
    } catch (e) {
        console.error('Error:', e);
    }
}