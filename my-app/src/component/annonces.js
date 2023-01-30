/* eslint-disable jsx-a11y/alt-text */
import'../Annonces.css'

export default function Cover(props) {
    return (
        <div className="container">
            <main className="main">
                <div className="annonce">
                    <img className="img" src={props.src} width={340} height={256} />
                     <div className='content'>
                        <h2>{props.price} € cc</h2>
                        <h4 className="name">{props.name}</h4>
                        <p className='type'>{props.type}</p>
                        <div className="description"> <p>{props.nbpiece} pièce &#x2022;</p><p>{props.nbchambres} chambres &#x2022;</p> <p>{props.m2} m²</p> </div>
                        <div className='lieu'><p>{props.ville}</p> <p>({props.CP})</p></div>  
                    </div>
                </div>
            </main>
        </div>
    )
}
