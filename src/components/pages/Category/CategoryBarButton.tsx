import {ICategory} from "../../../interfaces/ICategory.ts";
export const CategoryBarButton: React.FC<ICategory> = ({name,icon, onClick}) => {
    return (
        <div className="shrink-0 relative h-full" onClick={onClick}>
            <div className="h-48 w-48 bg-custom hover:bg-green-100 rounded-50 my-0 mx-auto">
                <div className="px-3 py-5 text-center">
                    <div className="flex mb-4 text-center justify-center">
                        <div className="text-8xl text-gray-700">{icon}</div>
                    </div>
                    <div>
                        <h4 className="text-lg text-black font-normal">{name}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}