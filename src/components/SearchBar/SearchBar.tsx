import { postRequest } from '../../api/restclient'
import { IonLabel, IonSearchbar, IonContent, IonItem, IonAvatar, IonList } from '@ionic/react'
import { useState } from 'react'

const SearchBar = () => {
    const [text, setText] = useState('')
    const [results, setResults] = useState([])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleInputChange = async (event: any) => {
        setText(event.detail.value)
        try {
            const response = await postRequest({
                location: {
                    latitude: 40.783058,
                    longitude: -73.971252
                }
            })
            setResults(response?.data?.results || [])
        } catch (e) {
            console.error(`Couldn't get results for post request: ${e}`)
        }
    }

    // Ideally we have a type for the below map elements but waiting on backend to define it
    return (
        <IonContent>
            <IonSearchbar value={text} onIonChange={handleInputChange} />
            <IonList inset={true}>
                {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    results.map((item: any) => (
                        <IonItem key={JSON.stringify(item)}>
                            <IonAvatar slot='start'>
                                <img src={item.icon} alt='avatar' />
                            </IonAvatar>
                            <IonLabel style={{ whiteSpace: 'normal' }}>{item.name}</IonLabel>
                        </IonItem>
                    ))
                }
            </IonList>
        </IonContent>
    )
}

export default SearchBar
