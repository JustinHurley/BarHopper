import Profile from './pages/Profile'
import Search from './pages/Search'
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { searchSharp } from 'ionicons/icons'
import { Redirect, Route } from 'react-router-dom'
import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
import './theme/variables.css'

setupIonicReact()

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path='/search'>
                        <Search />
                    </Route>
                    <Route exact path='profile'>
                        <Profile />
                    </Route>
                    <Route exact path='/'>
                        <Redirect to='/search' />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot='bottom'>
                    <IonTabButton tab='search' href='/search'>
                        <IonIcon aria-hidden='true' icon={searchSharp} />
                        <IonLabel>Search</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab='profile' href='/profile'>
                        <IonIcon aria-hidden='true' icon={searchSharp} />
                        <IonLabel>Profile</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
)

export default App
