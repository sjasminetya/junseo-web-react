import React from 'react'

const Loading = () => {
    return (
        <section className="flex justify-center items-center">
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-dark ml-2" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-dark ml-2" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </section>
    )
}

export default Loading
