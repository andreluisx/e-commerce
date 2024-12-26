import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const comment = {
    star_1: 213,
    star_2: 231,
    star_3: 213,
    star_4: 2314,
    star_5: 1231
}

export default function RatingStatus() {
    const calculateTotal = () => {
        return comment.star_1 + comment.star_2 + comment.star_3 + comment.star_4 + comment.star_5;
    };

    const calculateMedia = () => {
        const total = calculateTotal();
        return ((1 * comment.star_1) + 
                (2 * comment.star_2) + 
                (3 * comment.star_3) + 
                (4 * comment.star_4) + 
                (5 * comment.star_5)) / total;
    };

    const total = calculateTotal();
    const media = calculateMedia();

    const calculatePercentage = (starCount) => {
        return (starCount / total) * 100;
    };

    return (
        <div className="w-full">
            <div className="p-5 border-slate-200 border-solid border-2 rounded-lg">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex mb-5 flex-row items-center gap-1 text-4xl font-bold">
                        <p>{media.toFixed(1)}</p>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                    </div>
                    <div className="flex items-center">
                        <p className="text-lg text-slate-600">{total} avaliações</p>
                    </div>
                </div>
            
                
                {[5, 4, 3, 2, 1].map((starNumber) => (
                    <div key={starNumber} className="flex-row flex gap-2 items-center mb-3">
                        <p className="font-bold text-lg min-w-[10px]">{starNumber}</p>
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-yellow-500 rounded-full"
                                style={{ width: `${calculatePercentage(comment[`star_${starNumber}`])}%` }}
                            />
                        </div>
                        <p className="min-w-[40px] text-right">{comment[`star_${starNumber}`]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}