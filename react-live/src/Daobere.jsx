import React from 'react';
const Daobere = () => {
    return ( <div className='BodyDaOBere' >
        <div className="DetailsDaOBere">
        <div className="DetailsDaOBereInner"></div>
        </div>
        <div className="DaObere">
            <div className="DaObereInner">
                <h1 className='TitleDaOBereCard'> Da-i o bere lui Grig</h1>
                <div className="quantitySelector">
                    <div className="imagineBereMica"/>
                    <div className='xMarkBeer'> x </div>
                    <input type="text" placeholder='0' size="2" maxLength={3}></input>
                    <div className='QuantityPresets'>1</div>
                    <div className='QuantityPresets'>3</div>
                    <div className='QuantityPresets'>5</div>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Daobere;