import { Editor, Transforms, Text } from 'slate';
import { useSlate } from 'slate-react';

export const Toolbar = () => {
    const editor = useSlate();

    const isMarkActive = (editor: Editor, format: string): boolean => {
        const marks = Editor.marks(editor) as Record<string, boolean> | null;
        return marks ? marks[format] === true : false;
    };

    const toggleMark = (editor: Editor, format: string): void => {
        const isActive = isMarkActive(editor, format);
        if (isActive) {
            Editor.removeMark(editor, format);
        } else {
            Editor.addMark(editor, format, true);
        }
    };


    return (
        <div className="flex space-x-2 p-2 bg-gray-100 border-b border-gray-300">
            <button
                className="px-2 py-1 bg-white border border-gray-300 rounded-lg hover:bg-gray-200"
                onMouseDown={event => {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleMark(editor, 'bold');
                }}
            >
                B
            </button>
            <button
                className="px-2 py-1 bg-white border border-gray-300 rounded-lg hover:bg-gray-200"
                onMouseDown={event => {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleMark(editor, 'italic');
                }}
            >
                I
            </button>
            <button
                className="px-2 py-1 bg-white border border-gray-300 rounded-lg hover:bg-gray-200"
                onMouseDown={event => {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleMark(editor, 'underline');
                }}
            >
                U
            </button>
            <select
                className="px-2 py-1 bg-white border border-gray-300 rounded-lg hover:bg-gray-200"
                onChange={event => {
                    Transforms.setNodes(
                        editor,
                        { fontSize: event.target.value } as Partial<Node>,
                        { match: n => Text.isText(n), split: true }
                    );
                }}
            >
                <option value="12">12px</option>
                <option value="14">14px</option>
                <option value="16">16px</option>
                <option value="18">18px</option>
                <option value="20">20px</option>
            </select>
        </div>
    );
};