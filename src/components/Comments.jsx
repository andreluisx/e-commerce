import Comment from "./CommentCard";
import RatingStatus from "./RatingStatus";


export default function Comments(){
    return <div className="flex w-full flex-col gap-5 pb-10">
        <p className="font-bold text-4xl" >Avaliações de Clientes</p>
        <div className="flex w-full gap-5 pb-10 flex-wrap">
            <div className="flex w-full sm:w-1/3 gap-5">
                <RatingStatus/>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <Comment></Comment>
                <Comment></Comment>
                <Comment></Comment>
            </div>
        </div>
    </div>
}