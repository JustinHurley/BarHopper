import React, { useState } from 'react';
import { IonLabel, IonSearchbar, IonContent, IonItem, IonAvatar } from '@ionic/react';
import { postRequest } from '../../api/restclient';

const SearchBar = ({ label }: any) => {
    const [text, setText] = useState('');
    const [results, setResults] = useState([]);

    const handleInputChange = async (event: any) => {
        setText(event.detail.value);
        try {
            const response = await postRequest({ 
                location: {
                    latitude: 40.783058,
                    longitude: -73.971252
                } 
            })
            setResults(response.data.results);
        } catch (e) {
            console.error(`Couldn't get results for post request: ${e}`)
        }
        
    };

    return (
        <IonContent>
            {label && <IonLabel position="floating">{label}</IonLabel>}
            <IonSearchbar value={text} onIonChange={handleInputChange} />
            {results.map((item: any) => (
                <IonItem key={JSON.stringify(item)}>
                    <IonAvatar slot="start">
                        <img src={item.icon} alt="avatar" />
                    </IonAvatar>
                    <IonLabel style={{ whiteSpace: 'normal' }} >{item.name}</IonLabel>
                </IonItem>
            ))}
        </IonContent>
    );
};

export default SearchBar;