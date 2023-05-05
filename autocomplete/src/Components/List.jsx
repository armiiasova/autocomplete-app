
function List({listFirst,listLast, func, data}){
return(
    <div>
        <li onClick={() => func(data)}>
        {listFirst} {listLast}
        </li>
    </div>
)
}

export default List;