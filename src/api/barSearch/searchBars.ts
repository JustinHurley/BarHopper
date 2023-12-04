
export async function searchBars(radius = 1000) {
    const apiKey = 'API_KEY_HERE';
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json
    ?fields=formatted_address%2Cname
    &input=bar
    &inputtype=textquery
    &locationbias=circle%3A2000%4047.6918452%2C-122.2226413
    &key=${apiKey}`

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error:', error);
    }
}