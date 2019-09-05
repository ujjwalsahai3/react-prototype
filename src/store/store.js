import {createStore} from 'redux'
import rootReducer from './Reducers'

const appStore = createStore(rootReducer)

export default appStore