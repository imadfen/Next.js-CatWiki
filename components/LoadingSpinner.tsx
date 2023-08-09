import {TailSpin} from "react-loader-spinner"
import { BaseProps } from "react-loader-spinner/dist/type"

function LoadingSpinner(props: BaseProps) {
    return (
        <div className="w-full h-full flex justify-center items-center flex-grow">
            <TailSpin
            {...props}
            />
        </div>
    )
}

export default LoadingSpinner