import img from '@/assets/img.jpeg'
import { add } from 'lodash'
import styles from './home.module.less'
import indexStyle from './index.module.css'
import common from './common.module.scss'
import boxStyle from './box.module.styl'

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
      <div className={styles.bgBox}></div>
      <div className={indexStyle.urlTest}></div>
      <div className={common.container}></div>
      <div className={boxStyle.boxSmall}>box</div>
      <div className={styles.clearfix}>
        <div className={styles.floatItem}>2</div>
        <div className={styles.listItem}>1</div>
        <div className={styles.floatItem}>2</div>
        <div className={styles.floatItem}>2</div>
        <div className={styles.floatItem}>2</div>
        <div className={styles.listItem}>3</div>
        <div className={styles.listItem}>4</div>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.flexBox}></div>
        <div className={styles.flexBox}></div>
      </div>
    </>
  )
}

export default Home
