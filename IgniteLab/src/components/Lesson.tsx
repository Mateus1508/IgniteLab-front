import { CheckCircle, Lock } from 'phosphor-react'
import {isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';

interface LessonProps{
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}
export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormated = format(props.availableAt, "EEEE', 'd ' de 'MMMM' - 'k'h'mm", {
    locale: ptBR,
  })
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormated}
      </span>
      
      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
           
          <span className="text-sm text-purple-400 font-medium flex items-center gap-2">
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>
          
          ):(
         
          <span className="text-sm text-orange-300 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>)}
          <span className="text-xs rounded px-3 py-1 text-white border border-green-600 font-bold">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
       
        </header>
        <strong className="text-sm text-gray-100 mt-5 block text-center font-medium">
          {props.title}
        </strong>
      </div>
    
    </Link>
  )
}