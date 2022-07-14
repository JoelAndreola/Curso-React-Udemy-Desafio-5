import styles from "./CarContainer.css"

const CarsInfo = ({carro:{nome, marca, ano, cor, img}}) => {
    return (
        <div>
            <div className='container'>
                <img className='contIMG'src={img} alt="fucking awesome muscle car"/>
                <ul>
                    <li>Nome: {nome} | Marca: {marca}</li>
                    <li>Cor: {cor} | Ano: {ano}</li>
                </ul>
            </div>
        </div>
    )
}

console.log(styles)

export default CarsInfo