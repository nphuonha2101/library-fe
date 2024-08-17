import {Link} from "react-router-dom";
import {ICategoryProps} from "../../../interfaces/ICategoryProps.ts";


export const CategoryBarButton:React.FC<ICategoryProps> = ({icon, label, onClick}) => {
    return (

           <div className="shrink-0 relative h-full">
               <div className="h-48 w-48 bg-custom hover:bg-green-100 rounded-50 my-0 mx-auto">
                   <Link to={'/category'} className="block relative w-full h-full text-center" onClick={onClick}>
                       <div className="px-3 py-5 text-center">
                           <div className="flex mb-4 text-center justify-center">
                               <div className="text-8xl text-gray-700">{icon}</div>
                           </div>
                           <div>
                               <h4 className="text-lg text-black font-normal">{label}</h4>
                           </div>
                       </div>
                   </Link>
               </div>

        </div>
    )
}