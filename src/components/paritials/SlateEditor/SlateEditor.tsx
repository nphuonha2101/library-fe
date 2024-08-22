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
        <form onSubmit={(event) => { handleSubmit(event); handleSave(); }} className="p-4 bg-white shadow-md rounded-lg">
            <Slate editor={editor} initialValue={value} onChange={value => setValue(value as CustomElement[])}>
                <Toolbar />
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    placeholder="Nhập mô tả sách..."
                    className="mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </Slate>
        </form>
    );
};