import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export const TinyMCEEditor = ({ initialValue, onEditorChange }: { initialValue: string, onEditorChange: (content: string) => void }) => {
    const editorRef = useRef<any>(null);

    return (
        <Editor
            apiKey='l6tuqqoti1d22hn128ohs8h5073qqjfzivo82z1kdh8r11j5'
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue={initialValue}
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \
                          alignleft aligncenter alignright alignjustify | \
                          bullist numlist outdent indent | removeformat | help'
            }}
            onEditorChange={onEditorChange}
        />
    );
};
