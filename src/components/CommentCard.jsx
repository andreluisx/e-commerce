import { Avatar } from "@mui/material"
import { Rating } from '@mui/material';

const comment = {
    user: 'Joaoozin21',
    stars: 4,
    comment: 'Ótimo produto e entrega chegou muito rápido, gostei muito de testar ele recomendo bastante muito rápi nao trava e a camera é muito boa',
    date: '22 de outubro de 2022'

}

export default function Comment(){
    return <div className="p-4 border-solid border-2 rounded-lg border-slate-200">
        <div className="flex-row flex gap-3 items-center mb-3 flex-wrap">
            <Avatar sx={{ bgcolor: 'orange' }}>J</Avatar>
            <p className="font-bold">{comment.user}</p>
            <Rating
                name="half-rating-read"
                defaultValue={comment.stars}
                precision={0.5}
                readOnly
            />
        </div>
        <div>
            <p>{comment.comment}</p>
        </div>
        <div>
            <p className="text-sm text-slate-400 pt-3">{comment.date}</p>
        </div>
    </div>
} 