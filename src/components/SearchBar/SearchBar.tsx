import React, { useState } from 'react';
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { postRequest } from '../../api/restclient';

const TextInputComponent = ({ label }: any) => {
    const [text, setText] = useState('');

    const handleInputChange = (event: any) => {
        setText(event.detail.value);
        const response = postRequest({ test: 'hello world' })
    };

    return (
        <IonItem>
            {label && <IonLabel position="floating">{label}</IonLabel>}
            <IonInput value={text} onIonChange={handleInputChange} />
        </IonItem>
    );
};

export default TextInputComponent;