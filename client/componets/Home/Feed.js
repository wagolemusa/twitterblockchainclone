import { BsStars } from "react-icons/bs";

const style = {
    wrapper: `flex-[3] boeder-r border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

function Feed() {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
        </div>
    )
}

export default Feed;


