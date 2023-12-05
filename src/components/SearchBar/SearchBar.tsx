import React, { useState } from 'react';
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { postRequest } from '../../api/restclient';

const SearchBar = ({ label }: any) => {
    const [text, setText] = useState('');

    const handleInputChange = async (event: any) => {
        setText(event.detail.value);
        try {
            const response = await postRequest({ 
                location: {
                    latitude: 40.783058,
                    longitude: -73.971252
                } 
            })
            console.log(response)
            response.data.results.forEach((item: any) => {
                console.log(item.name)
            })
        } catch (e) {
            console.error(`Couldn't get results for post request: ${e}`)
        }
        
    };

    return (
        <IonItem>
            {label && <IonLabel position="floating">{label}</IonLabel>}
            <IonInput value={text} onIonChange={handleInputChange} />
        </IonItem>
    );
};

export default SearchBar;