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
  Button,
  Row,
  Col,
  Tabs,
  TabPane,
  Message
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
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.prototype.$message = Message
  }
}
export default element
