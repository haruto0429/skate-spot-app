import {db} from '../config/firebase';

const cardsRef = db.collection('cards')

  const CardData = (name,address,explanation) => {
    return () => {
    
        const data = {
        name: name,
        address: address,
        explanation: explanation,
    }

    

    
    

    const ref = cardsRef.doc()
    const id = ref.id
    data.id = id

    return cardsRef.doc(id).set(data)
    }
 }

 export default CardData
 
