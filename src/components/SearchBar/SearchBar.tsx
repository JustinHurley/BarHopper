import React, { useState } from 'react';
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { searchBars } from '../../api/barSearch/searchBars';

const TextInputComponent = ({ label }: any) => {
  const [text, setText] = useState('');

  const handleInputChange = (event: any) => {
    setText(event.detail.value);
    console.info(`Searching for: ${event.detail.value}`)
    const response = searchBars(event)
    console.log(response)
  };

  return (
    <IonItem>
      {label && <IonLabel position="floating">{label}</IonLabel>}
      <IonInput value={text} onIonChange={handleInputChange} />
    </IonItem>
  );
};

export default TextInputComponent;