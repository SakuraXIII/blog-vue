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
  Backtop,
  Icon,
  Tooltip,
  Drawer,
  Avatar,
  Popover,
  Slider,
  Pagination,
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
    Vue.use(Backtop)
    Vue.use(Icon)
    Vue.use(Tooltip)
    Vue.use(Drawer)
    Vue.use(Avatar)
    Vue.use(Popover)
    Vue.use(Slider)
    Vue.use(Pagination)
    Vue.prototype.$message = Message
  }
}
export default element
