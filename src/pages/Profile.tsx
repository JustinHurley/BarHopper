import SearchBar from '../components/SearchBar/SearchBar'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react'

const Profile = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Profile</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <SearchBar />
            </IonContent>
        </IonPage>
    )
}

export default Profile
