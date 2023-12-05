import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser,
        faMagnifyingGlass,
        faHouse,faBars,
        faMobileScreenButton,
        faChevronRight,
        faTable,  
        faMedal,
        faBriefcase,
        faBuilding,
        faChevronLeft
      } from '@fortawesome/free-solid-svg-icons'
        
import { faRectangleList } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUser,
  faRectangleList,
  faMagnifyingGlass,
  faHouse,
  faBars,
  faMobileScreenButton,
  faChevronRight,
  faTable,
  faMedal,
  faBriefcase,
  faBuilding,
  faChevronLeft)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
