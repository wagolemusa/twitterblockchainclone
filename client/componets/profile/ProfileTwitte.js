import React from 'react'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}


const tweets = [
    {
        displayName: 'refuge',
        userName: '0x673456329289216jhdsdhjcwq7w6w7q90ww8q9wqwq67kc',
        avator: 'https://avatars.githubusercontent.com/u/11345727?v=4',
        text: 'gm',
        isProfileImageNft: true,
        timestamp: '2020-06-01T2:00:00:000Z'
    },
    {
        displayName: 'wise',
        userName: '0x566656329289216jhdsdhjcwq7w6w7q90ww8q9wqwq67kc',
        avator: 'https://avatars.githubusercontent.com/u/11345727?v=4',
        text: 'gm',
        isProfileImageNft: true,
        timestamp: '2020-06-01T2:00:00:000Z'
    },
]


function ProfileTwitte () {

    return (
     <div className={style.wrapper}>
         {tweets?.map((tweet, index) => (
             <Post 
                key={index}
                displayName="refuge wise"
                userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(-4)}`}
                text={tweet.text}
                avatar={tweet.avator}
                isProfileImageNft={tweet.isProfileImageNft}
                timestamp={tweet.timestamp}
            />
         ))}
     </div>
    )
}
export default ProfileTwitte;


