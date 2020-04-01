import {
  Container,
  Header,
  Main,
  Footer,
  Card,
  Aside,
  Form,
  FormItem,
  Input,
  Button
} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Container)
    Vue.use(Header)
    Vue.use(Main)
    Vue.use(Footer)
    Vue.use(Card)
    Vue.use(Aside)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Button)
  }
}
export default element
