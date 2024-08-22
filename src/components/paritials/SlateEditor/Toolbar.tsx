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
        <div>
            <button
                onMouseDown={event => {
                    event.preventDefault();
                    toggleMark(editor, 'bold');
                }}
            >
                B
            </button>
            <button
                onMouseDown={event => {
                    event.preventDefault();
                    toggleMark(editor, 'italic');
                }}
            >
                I
            </button>
            <button
                onMouseDown={event => {
                    event.preventDefault();
                    toggleMark(editor, 'underline');
                }}
            >
                U
            </button>
            <select
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

