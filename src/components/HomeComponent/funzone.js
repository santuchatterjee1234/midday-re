import React from 'react';
import Link from 'next/link';
import homemodulecss from "../../../styles/Home.module.css";
function Funzone() {
  return (
    <div className='container'>
        <div className={`${homemodulecss.funzonebackground} row mt-4 p-3 pb-1`}>
            <div className='col-md-4 col-6'>
                <h2 className={homemodulecss.funzonetitle}>Fun Zone</h2>
            </div>
            <div className='col-4 d-none d-md-block'>
                <h2 className={homemodulecss.takeabreak}>Take a break and enjoy</h2>
            </div>
            <div className='col-md-4 col-6 text-center'>
                <Link href=""><button type='button' className={`${homemodulecss.buttonposition}`}>Play now</button></Link>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <p className="advertisement-text text-center mt-4 mb-0">ADVERTISEMENT</p>
                {/* 970*250 Add Start */}
                <div className="add-970x250 mx-auto text-center mb-3 d-none d-md-block"></div>
                {/* 970*250 Add End */}
                {/* 300*250 Add Start */}
                <div className="add-300x250 mx-auto text-center mb-3 d-block d-md-none"></div>
                {/* 300*250 Add End */}
            </div>
        </div>
    </div>
  )
}

export default Funzone