import img from '~/assets/img.jpeg'
import { add } from 'lodash'
import './home.less'

interface Props {
  count: number
}

const Home = (props: Props) => {
  const a = 1
  console.log(a.toString())
  console.log(add(66, 34))
  return (
    <>
      <div>{props.count}</div>
      <img className="img-01" src={img} alt="" width="30" />
      <img src="/pictures/pic01.jpg" alt="pic01" width="50" />
    </>
  )
}

export default Home
