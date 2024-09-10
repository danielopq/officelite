
type Props = {
    id:string;
    pack:string;
    price:string;
}

const Option: React.FC<Props> = ({id,pack,price})=>{
    return(
        <div id={id}><span className="pack">{pack}</span><span className="price">{price}</span></div>
    )
}
export default Option;