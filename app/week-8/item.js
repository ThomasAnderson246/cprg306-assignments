export default function Item({itemObj, onSelect}){
    let textStyle = "text-amber-300 font-serif";
    let {name, quantity, category, id} = itemObj;

    const handleClick = () => onSelect(name);
    return(
        <div onClick={handleClick} className="bg-green-600 m-3 p-3 border w-120">
            <h3 className={textStyle}>Item: {name}</h3>
            <p className={textStyle}>Quantity: {quantity}</p>
            <p className={textStyle}>Category: {category}</p>
            <p className={textStyle}>ID: {id}</p>
        </div>
    );
}