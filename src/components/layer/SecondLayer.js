import React from 'react'
import '../../assets/content/RowLayer.css'
import totalRevenue from'../../assets/images/secondLayer/totalRevenue.png'
import payments from'../../assets/images/secondLayer/payments.png'
import transactions from'../../assets/images/secondLayer/transactions.png'
import profileReport from'../../assets/images/secondLayer/profileReport.png'

function SecondLayer(props) {
    return <div className='row RowLayer'>
                    <div className='col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4'>
                        <div className='card'>
                            <img  src={totalRevenue} alt='TotalRevenue' />
                        </div>
                    </div>
                    <div className='col-12 col-md-8 col-lg-4 order-3 order-md-2'>
                        <div className='row'>
                            <div className='col-6 mb-4'>
                                <div className='card'>
                                    <img  src={payments} alt='Payments' />
                                </div>
                            </div>
                            <div className='col-6 mb-4'>
                                <div className='card'>
                                    <img  src={transactions} alt='Transactions' />
                                </div>
                            </div>
                            <div className='col-12 mb-4'>
                                <div className='card'>
                                    <img  src={profileReport} alt='ProfileReport' />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    
}

export default SecondLayer