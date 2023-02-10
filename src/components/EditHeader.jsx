import React from 'react'
import '../style/popup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { debounce } from 'lodash';
import { useEffect, useState, useRef } from 'react'
const EditHeader = (props) => {
    const [values, setAllValues] = useState({
        Name: '',
        Hashtags: [],
        Website: '',
        IntroParagraph: ''
    })
   

    const changeHandler = (e) => {
            setAllValues({...values, [e.target.name]: e.target.value})
    }

    const changeHandlerArray = debounce((e) => {
        setAllValues({...values, Hashtags: e.target.value})
    },500)

    return (
        <>
            <div className="box">
                <div className="main">
                    <h1>Project</h1>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        props.update(values)
                        
                    }}>
                        <span className="lable must-fill">Name</span><br />
                        <input className="custom-input mb-3" defaultValue={props.name}
                        onChange={changeHandler} name="Name"/><br />
                        <span className="lable ">Keywords</span><br />
                        <input className="custom-input" style={{ marginBottom: "8px" }} defaultValue=""
                        onChange={changeHandlerArray} />
                        <ul style={{ padding: 0 }}>
                            {props.hashtags?.map((hashtag, index) => (
                                <li key={index} className="hashtag">
                                    <span>{hashtag}</span>
                                    <i className="fa-sharp fa-solid fa-xmark"></i>
                                </li>)
                            )}
                        </ul>
                        <br />
                        <span className="lable must-fill">Summary</span><br />
                        <div style={{ position: "relative" }}>
                            <textarea name='IntroParagraph'
                            onChange={changeHandler}>{props.textParagraph}
                            </textarea>

                        </div>
                        <div>
                            <span className="lable">Websites</span><br />
                            <input className="custom-input lg-input-high sm-input-high" 
                            defaultValue={props.website} name='Website' onChange={changeHandler}/>
                            <select className="custom-input lg-input-low sm-input-low">
                                <option>Official site</option>
                            </select>

                            <button>Remove</button>
                            <button>Add another website</button>

                        </div>
                        <div className="d-flex justify-content-end exit" style={{ marginTop: "55px" }}>
                            <button onClick={props.handleClose}>Cancel</button>
                            <button type='submit'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditHeader