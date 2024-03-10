import { Loading } from '../Loading'
import { ListaTarefasItem } from './ListaTarefasItem'
import style from './ListaTarefas.module.css'
import { useAppContext } from '../../hooks'

const ListaTarefas = () => {
    const { tarefas, loadingCarregar } = useAppContext()

    return (
        <ul className={style.ListaTarefas}>
            {loadingCarregar && (<p>Carregando...<Loading/></p>)}
            {!loadingCarregar && !tarefas.length && (<p>Não há Tarefas cadastradas...</p>)}
            {tarefas.map(item => (
                <ListaTarefasItem 
                    key={item.id} 
                    id={item.id} 
                    nome={item.nome}
                />))
            }
        </ul>
    )
}

export {ListaTarefas}