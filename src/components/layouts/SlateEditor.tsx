import {useMemo, useState} from "react";
import {Editable, Slate, withReact} from "slate-react";
import {createEditor, Descendant} from "slate";
import {CustomElement} from "../../interfaces/CustomElement.ts";

export const SlateEditor = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState<CustomElement[]>([
        {
            type: 'paragraph',
            children: [{ text: 'Nhập mô tả ở đây' }],
        },
    ]);
    return (
        <Slate
            editor={editor}
            initialValue={value}
            onChange={(newValue: Descendant[]) => setValue(newValue as CustomElement[])}
        >
            <Editable
                className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nhập mô tả ở đây"
            />
        </Slate>
    );
};