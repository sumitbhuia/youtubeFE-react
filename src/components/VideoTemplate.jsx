export function VideoTemplate(props){

    return(
     <div className ="p-3 cursor-pointer">
        <img className='rounded-lg' src={props.image} alt="photo" />

        <div className='grid grid-cols-12'> 
            <img className='rounded-full col-span-2 p-1 w-12 h-12 md:w-10 md:h-10 lg:w-8 lg:h-8' src={props.channelArt} alt="channel" />
            <div className='col-span-10'>
                <div className="flex text-gray-50 text-xl font-bold" >{props.title}</div>
                <div className='flex text-gray-400 text-l font-normal' >{props.author}</div>
                <div className="flex text-gray-400 text-l font-normal">
                <div>{props.view}</div> • <div>{props.timeStamp}</div>
                </div>

            </div>

        </div>
      

        
    </div>)
}