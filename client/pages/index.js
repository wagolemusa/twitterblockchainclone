import head from 'next/head';
import Sidebar from '../componets/Sidebar'
import Widgets from '../componets/Widgets'
import Feed from '../componets/Home/Feed'
const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`

}

export default function Home() {

  return(
    <>
      <div className={style.wrapper}>
        <div className={style.content}>
          <Sidebar/>
          <Feed/>
        <Widgets />
      </div>
    </div>
    </>
  )
}