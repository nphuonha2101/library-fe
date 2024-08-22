import {Toolbar} from "./Toolbar.tsx";
import {Editable, RenderElementProps, RenderLeafProps, Slate, withReact} from "slate-react";
import {useMemo, useState} from "react";
import {CustomElement} from "../../../interfaces/CustomElement.ts";
import {createEditor} from "slate";



interface SlateEditorProps {
    onSave: (content: CustomElement[]) => void;
    handleSubmit: (event: React.FormEvent<Element>) => Promise<void>;
}

export const SlateEditor: React.FC<SlateEditorProps> = ({ onSave, handleSubmit }) => {
    const [value, setValue] = useState<CustomElement[]>([]);
    const editor = useMemo(() => withReact(createEditor()), []);

    const renderElement = (props: RenderElementProps) => {
        return <div {...props.attributes}>{props.children}</div>;
    };

    const renderLeaf = (props: RenderLeafProps) => {
        return <span {...props.attributes}>{props.children}</span>;
    };

    const handleSave = () => {
        onSave(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Slate editor={editor} initialValue={value} onChange={value => setValue(value as CustomElement[])}>
                <Toolbar />
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    placeholder="Nhập mô tả sách..."
                />
            </Slate>

            <button onClick={handleSave} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Gửi
            </button>
        </form>
    );
};