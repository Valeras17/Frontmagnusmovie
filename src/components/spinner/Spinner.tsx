
import { CirclesWithBar } from 'react-loader-spinner'

interface SpinnerProps{
    title?:string;
    className?:string;
}

const Spinner = ({title,className}:SpinnerProps) => {
    return (
        <div className={className?? "my-10 flex flex-col justify-center items-center"}>
            <p className='text-lg'>{title ?? ""}</p>
            <CirclesWithBar
                wrapperClass=''
                height={200}
                color='rgb(253,244,255)'
                barColor='rtg(162,28,175)' />
        </div>
    )
}

export default Spinner