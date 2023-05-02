import React from 'react'
import '../../assets/content/RowLayer.css'
import congratulationsJohn from'../../assets/images/firstLayer/congratulationsJohn.png'
import profit from'../../assets/images/firstLayer/profit.png'
import sales from'../../assets/images/firstLayer/sales.png'

function FirstLayer(props) {
    return <div className='row RowLayer'>
                <div className="col-lg-8 mb-4 order-0">
                    <div className='card'>
                        <img  src={congratulationsJohn} alt='CongratulationsJohn' />
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 order-1">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-6 mb-4">
                            <div class="card">
                                <img  src={profit} alt='Profits' />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-6 mb-4">
                            <div class="card">
                                <img  src={sales} alt='Sales' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
}

export default FirstLayer