
export default function Item(item){
    return (
        <div>
            <ul>
                <li >{item.name}</li>
                <li >Buy {item.quantity} in {item.category}</li>
            </ul>
        </div>
    );
}
