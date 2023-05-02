import React from 'react'
import '../../assets/content/RowLayer.css'
import orderStatistics from'../../assets/images/thirdLayer/orderStatistics.png'
import income from'../../assets/images/thirdLayer/income.png'
import transactions from'../../assets/images/thirdLayer/transactions.png'

function ThirdLayer(props) {
    return <div className='row RowLayer'>
                    <div className='col-md-6 col-lg-4 col-xl-4 order-0 mb-4'>
                        <div className='card h-100'>
                            <img  src={orderStatistics} alt='OrderStatistics' />
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 order-1 mb-4'>
                        <div className='card h-100'>
                            <img  src={income} alt='Income' />
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 order-2 mb-4'>
                        <div className='card h-100'>
                            <img  src={transactions} alt='Transactions' />
                        </div>
                    </div>
            </div>
    
}

export default ThirdLayer