import React, { useRef, useState } from 'react'

const Seach = (props) => {
    const [seach, setSeach] = useState('')
    // const typingRef = useRef(null)


    const onHanleSeach = (e) => {
        // const value = e.target.value
        // setSeach(value)
        // if (!props.onSubmit) return;
        // if (typingRef.current) {
        //     clearTimeout(typingRef.current)
        // }
        // typingRef.current = setTimeout(() => {
        //     const formValues = {
        //         seach:value,
        //     };
        //     props.onSubmit(formValues)
        // }, 300)
    }
    return (
        <div>
            <div className="seach">
                <div className="left">
                    <a href=""> <img src="./img/Search.png" alt="" /></a>
                    <input type="text" placeholder="Living room" value={seach}
                        onChange={onHanleSeach}
                    />
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
