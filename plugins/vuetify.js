import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);
export default ctx => {
  const vuetify = new Vuetify({
    theme: {
      dark: false, // From 2.0 You have to select the theme dark or light here
      primary: '#47b784',
      accent: '#e76f54',
      secondary: '#34495e',
      info: '#0D47A1',
      warning: '#ffb300',
      error: '#B71C1C',
      success: '#2E7D32',
    }
  })
  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}