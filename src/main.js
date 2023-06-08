import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
loadFonts()

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faServer } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret,faServer)



createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(vuetify)
  .mount('#app')
