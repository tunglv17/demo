import React from 'react'

const Seach = () => {
    return (
        <div>
            <div className="seach">
                <div className="left">
                    <a href=""> <img src="./img/Search.png" alt="" /></a>
                    <input type="text" placeholder="Living room" />
                </div>
                <div className="right">
                    <select>
                        <option selected>Best match</option>
                        <option>Saab</option>
                        <option>VW</option>
                        <option>Audi</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Seach
