import React, {useState} from 'react'
import '../style/popup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const EditFeature = (props) => {
    const [values, setAllValues] = useState(props.featureArray)
    const changeHandler = id => (e) => {
        setAllValues(
            values.map(item => 
                item.Id === id 
                ? {...item, [e.target.name] : e.target.value} 
                : item 
        ))
}
    return (
        <div className="box">
            <div className="main">
                <h1>Features</h1><br />
                <form onSubmit={(e)=>{
                        e.preventDefault();
                        console.log(values)
                        props.updateFeatures(values)
                        
                    }}>
                    {props.featureArray?.map((feature, index) =>
                        <div key={index} className="feature-item-pop row flex d-flex">
                            <div className="col-lg-6 col-md-12 " >
                                <img src={require(`../assets/` + feature.Image)} alt="" /><br />
                            </div>
                            <div className="col-lg-6 col-md-12  align-item-center">
                                <span className="lable must-fill">User interaction</span><br />
                                <input className="custom-input mb-4" defaultValue={feature.Name} name="Name"
                                onChange={changeHandler(index)}/><br />
                                <div style={{ position: "relative" }}>
                                    <span class="lable must-fill">Description</span><br />
                                    <textarea defaultValue={feature.Description} name="Description"
                                    onChange={changeHandler(feature.Id)}>
                                    </textarea>
                                </div>
                            </div>
                        </div>)}

                    <div>
                        <button>Add another website</button>
                    </div>
                    <div class="d-flex justify-content-end exit" style={{ marginTop: "55px" }}>
                        <button onClick={props.handleClose}>Cancel</button>
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditFeature