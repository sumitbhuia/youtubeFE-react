import { VideoTemplate } from "./VideoTemplate"

export function VideoGrid(){

const VIDEOS=[
    {
    title: "Stock Market Opporunities",
    author :"Akshat Srivastava",
    image:"src/assets/photo1.png",
    channelArt:"src/assets/channel.jpg",
    view:"100k views",
    timeStamp : "4 days ago"
},
{
    title: "First post geo politics crazy",
    author :"Firstpost",
    image:"src/assets/photo2.png",
    channelArt:"src/assets/channel.jpg",
    view:"1M views",
    timeStamp : "1 days ago"
},

{
    title: "Crazy tech videos",
    author :"Mrwhosetheboss",
    image:"src/assets/photo3.png",
    channelArt:"src/assets/channel.jpg",
    view:"6M views",
    timeStamp : "5 minutes ago"
},

{
    title: "Crazy chip wars ",
    author :"Linus Tech Tips",
    image:"src/assets/photo4.png",
    channelArt:"src/assets/channel.jpg",
    view:"10k views",
    timeStamp : "1 week ago"
},
{
    title: "Stock Market Opporunities",
    author :"Akshat Srivastava",
    image:"src/assets/photo1.png",
    channelArt:"src/assets/channel.jpg",
    view:"100k views",
    timeStamp : "4 days ago"
},
{
    title: "First post geo politics crazy",
    author :"Firstpost",
    image:"src/assets/photo2.png",
    channelArt:"src/assets/channel.jpg",
    view:"1M views",
    timeStamp : "1 days ago"
},

{
    title: "Crazy tech videos",
    author :"Mrwhosetheboss",
    image:"src/assets/photo3.png",
    channelArt:"src/assets/channel.jpg",
    view:"6M views",
    timeStamp : "5 minutes ago"
},

{
    title: "Crazy chip wars ",
    author :"Linus Tech Tips",
    image:"src/assets/photo4.png",
    channelArt:"src/assets/channel.jpg",
    view:"10k views",
    timeStamp : "1 week ago"
},
{
    title: "Stock Market Opporunities",
    author :"Akshat Srivastava",
    image:"src/assets/photo1.png",
    channelArt:"src/assets/channel.jpg",
    view:"100k views",
    timeStamp : "4 days ago"
},
{
    title: "First post geo politics crazy",
    author :"Firstpost",
    image:"src/assets/photo2.png",
    channelArt:"src/assets/channel.jpg",
    view:"1M views",
    timeStamp : "1 days ago"
},

{
    title: "Crazy tech videos",
    author :"Mrwhosetheboss",
    image:"src/assets/photo3.png",
    channelArt:"src/assets/channel.jpg",
    view:"6M views",
    timeStamp : "5 minutes ago"
},

{
    title: "Crazy chip wars ",
    author :"Linus Tech Tips",
    image:"src/assets/photo4.png",
    channelArt:"src/assets/channel.jpg",
    view:"10k views",
    timeStamp : "1 week ago"
},
{
    title: "Stock Market Opporunities",
    author :"Akshat Srivastava",
    image:"src/assets/photo1.png",
    channelArt:"src/assets/channel.jpg",
    view:"100k views",
    timeStamp : "4 days ago"
},
{
    title: "First post geo politics crazy",
    author :"Firstpost",
    image:"src/assets/photo2.png",
    channelArt:"src/assets/channel.jpg",
    view:"1M views",
    timeStamp : "1 days ago"
},

{
    title: "Crazy tech videos",
    author :"Mrwhosetheboss",
    image:"src/assets/photo3.png",
    channelArt:"src/assets/channel.jpg",
    view:"6M views",
    timeStamp : "5 minutes ago"
},

{
    title: "Crazy chip wars ",
    author :"Linus Tech Tips",
    image:"src/assets/photo4.png",
    channelArt:"src/assets/channel.jpg",
    view:"10k views",
    timeStamp : "1 week ago"
},
{
    title: "Stock Market Opporunities",
    author :"Akshat Srivastava",
    image:"src/assets/photo1.png",
    channelArt:"src/assets/channel.jpg",
    view:"100k views",
    timeStamp : "4 days ago"
},
{
    title: "First post geo politics crazy",
    author :"Firstpost",
    image:"src/assets/photo2.png",
    channelArt:"src/assets/channel.jpg",
    view:"1M views",
    timeStamp : "1 days ago"
},

{
    title: "Crazy tech videos",
    author :"Mrwhosetheboss",
    image:"src/assets/photo3.png",
    channelArt:"src/assets/channel.jpg",
    view:"6M views",
    timeStamp : "5 minutes ago"
},

{
    title: "Crazy chip wars ",
    author :"Linus Tech Tips",
    image:"src/assets/photo4.png",
    channelArt:"src/assets/channel.jpg",
    view:"10k views",
    timeStamp : "1 week ago"
},
]
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {VIDEOS.map((it)=>{
                return <div>
                    <VideoTemplate
                        title={it.title}
                        author={it.author}
                        image={it.image}
                        channelArt={it.channelArt}
                        view={it.view}
                        timeStamp={it.timeStamp}
                    ></VideoTemplate>
                </div>

            })}
        </div>
    )
}