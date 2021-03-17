import React from 'react'

const Hamburger = () => {
    return (
        <>
            <div className = "hamburger">
                <button id="hamburger-button"> Menu </button>
                <div id="hamburger-menu">
                    <a href="#"> close </a> 
                    <a href="#"> Home </a> 
                    <a href="#"> Project </a> 
                    <a href="#"> Contact </a>
                </div>
            </div>
        </>
    )
}

export default Hamburger

// TODO :
    /**
     * change a to link
     * toggle the menu n button click
     * stylise the menu
     */
