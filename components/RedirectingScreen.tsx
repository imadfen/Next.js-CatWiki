import React, { useEffect } from 'react'
import LoadingSpinner from './LoadingSpinner'

function RedirectingScreen() {
    return (
        <div className='w-screen min-h-screen bg-[#00000070] fixed top-0 left-0 z-50 flex justify-center items-center'>
            <LoadingSpinner color='#fff' width={40} height={40} />
        </div>
    )
}

export default RedirectingScreen