import React, { useRef, useState, useEffect } from 'react';
import '../style/popup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Editor } from '@tinymce/tinymce-react';
import { debounce } from 'lodash';
const EditDescription = (props) => {

    const editorRef = useRef(null);
    const rs = props.descriptions.join('<br/>')
    const [value, setValue] = useState(rs);
    const [text, setText] = useState('');

    
    return (
        <div className="box">
            <div className="main">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const final = text.split('.');
                    props.updateDescription(final)
                }}>
                    <h1>Description</h1><br />
                    <div style={{ position: "relative" }}>
                        <Editor
                             value={value}
                             onInit={(evt, editor) => {
                               setText(editor.getContent({format: 'text'}));
                             }}
                             onEditorChange={(newValue, editor) => {
                               setValue(newValue);
                               setText(editor.getContent({format: 'text'}));
                             }}
                            init={{
                                height: 300,
                                menubar: false,

                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />


                    </div>
                    <div className="d-flex justify-content-end exit" style={{ marginTop: "55px" }}>
                        <button onClick={props.handleClose}>Cancel</button>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditDescription