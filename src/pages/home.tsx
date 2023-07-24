import img from '~/assets/img.jpeg'
import { add } from 'lodash'
import styles from './home.module.less'

interface Props {
  count: number
}

const Home = (props: Props) => {
  const a = 1
  console.log(a.toString())
  console.log(add(66, 34))
  console.log(styles)
  return (
    <>
      <div className={styles.countBox}>{props.count}</div>
      <div className="count-box">{props.count}</div>
      <img className="img-01" src={img} alt="" width="30" />
      <img src="/pictures/pic01.jpg" alt="pic01" width="50" />
    </>
  )
}

export default Home
