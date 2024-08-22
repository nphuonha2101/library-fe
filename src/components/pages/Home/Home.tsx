import {SlateEditor} from "../../paritials/SlateEditor/SlateEditor.tsx";
import {CustomElement} from "../../../interfaces/CustomElement.ts";

export const Home = () => {
    const handleSubmit = async (event: React.FormEvent<Element>) => {
        event.preventDefault();
        console.log('Submit');

    }

    const onSave = (content: CustomElement[]) => {
        console.log(content);
    }

    return (
        <div>
          <SlateEditor onSave={onSave} handleSubmit={handleSubmit} />
        </div>
    )
}