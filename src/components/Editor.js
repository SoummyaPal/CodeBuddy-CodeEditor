import React, { useEffect } from 'react'
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closeBrackets';

const Editor = () => {

    useEffect(() => {
        async function init(){
            Codemirror.fromTextArea(document.getElementById('realtimeEditor'), {
                mode: {name: 'javascript', json:true},
                theme: 'dracula', 
                autoCloseTags: true,
                autoCloseBracket: true,
                lineNumber: true,
            });
        }
        init();
    }, []);

  return (
    <textarea id='realtimeEditor'></textarea>
  )
}

export default Editor;