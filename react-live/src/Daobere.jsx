import React from 'react';
import { useState, useEffect } from 'react';
const Daobere = () => {
    const [beerCount, setBeerCount] = useState(1);
    
    useEffect(() => {
        // console.log(beerCount)
    });

    const HandleChangeBeerCount = (value)=>{
        setBeerCount(value)
    }
    
    const getQuantityPresetsClassName = (value)=>{
        return 'QuantityPresets '+ (beerCount== value ? "active":"")
    }

    return ( <div className='BodyDaOBere' >
        <div className="DetailsDaOBere">
        <div className="DetailsDaOBereInner"></div>
        </div>
        <div className="DaObere">
            <div className="DaObereInner">
                <span className='TitleDaOBere'> Da-i o bere lui
                    <input type="text" placeholder="Grig.." className='GivenBeerName form-control'></input>
                </span>
                <div className="quantitySelector">
                    <div className="imagineBereMica"/>
                    <div className='xMarkBeer'> x </div>
                    <input value={beerCount} style={{boxShadow:'none'}}
                    type="text" placeholder='0' size="2" maxLength={3} onChange={(e)=>{HandleChangeBeerCount(e.target.value)}}></input>
                    <div className={getQuantityPresetsClassName(1)} onClick={()=>{HandleChangeBeerCount(1)}}>1</div>
                    <div className={getQuantityPresetsClassName(3)} onClick={()=>{HandleChangeBeerCount(3)}}>3</div>
                    <div className={getQuantityPresetsClassName(5)} onClick={()=>{HandleChangeBeerCount(5)}}>5</div>
                </div>
                <textarea className='form-control BeerMesageContainer' 
                placeholder='Spune ceva frateste...(optional)'
                rows={3}></textarea>
                <button className='BtnDaOBere'>Da o bere</button>
            </div>
        </div>
    </div>);



}
 
export default Daobere;