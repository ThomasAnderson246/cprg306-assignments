export default function Item({itemObj}){
    let textStyle = "text-amber-300 font-serif";
    let {name, quantity, category} = itemObj;
    return(
        <div className="bg-green-600 m-3 p-3 border w-120">
            <h3 className={textStyle}>Item: {name}</h3>
            <p className={textStyle}>Quantity: {quantity}</p>
            <p className={textStyle}>Category: {category}</p>
            
        </div>
    );
}