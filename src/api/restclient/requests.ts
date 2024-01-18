import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postRequest = async <T>(data: T): Promise<any | undefined> => {
    try {
        const response = await axios.post('http://localhost:8101', data)
        console.log('Response:', JSON.stringify(response))
        return response
    } catch (e) {
        console.error('Error:', e)
        return undefined
    }
}
