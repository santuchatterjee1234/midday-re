import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import Link from 'next/link';
import axios from 'axios';
import { config } from '../../../next.config.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";
import horoscopecss from '../../../styles/category.module.css'
import Image from 'next/image';
import cta from "../../../public/assets/images/cta-mobile.png";
function Horoscope( { data } ) {
    const [pollData, setPollData] = useState(data.rhs_data.poll_data[0].poll_option_data);
    const [loadedHoroscope, setLoadedHoroscope] = useState(data.priority_data[0]); // Initialize with Infocus loaded
    
    const horoscope = [
      'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
      'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
    ];
    const horoscopeArray = horoscope.reduce((acc, sign) => {
      if (loadedHoroscope && loadedHoroscope[sign]) {
        acc.push({ sign, value: loadedHoroscope[sign] });
      }
      return acc;
    }, []);
   
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [selectedOptionId, setSelectedOptionId] = useState("");
    const handleDateChange = async (date) => {
        const formattedDate = format(date, 'yyyy-MM-dd');
        setSelectedDate(formattedDate);
        let response;
        let formatdata = new FormData();
        formatdata.append('filter_date', formattedDate);
        response = await axios.post(`${config.API_HOST}getHoroscopeListDateWise`, formatdata);
        console.log('response=',response);
        if (Array.isArray(response.data.priority_data) && response.data.priority_data.length > 0) {
            setLoadedHoroscope(response.data.priority_data[0]);
        }  else {
            setLoadedHoroscope([]);
        }    
    };
    const smallFirstLetter = (string) => {
        return string.charAt(0).toLowerCase() + string.slice(1);
    };

    const handleOptionChange = async (poll_id, selectedOptionId) => {
        setSelectedOptionId(poll_id);
        let response;
        let formatdata = new FormData();
        formatdata.append("poll_id", poll_id);
        formatdata.append("poll_label", selectedOptionId);
        response = await axios.post(
          `${config.API_HOST}setHomePageSavePollVote`,
          formatdata
        );
        setPollData(response.data[0].poll_option_data);
      };

    const roundOfValue = (number) => {
        return Math.round(number);
    };
  return (
    <div className='row mb-5'>
        <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
            <div className="left-inner-colm pb-0">
                <h1 className="d-md-inline mr-md-3 main-heading">
                    <span className="main-headline-sidebar"></span>
                    <span className="px-2">Horoscope</span>
                </h1>
            </div>
        </div>
        <div className={`col-md-9 lhselement ${horoscopecss.categoryrightborderdesktop}`}>
            <div>
                <div className="row mx-0" style={{backgroundColor: '#efe2be'}}>
                    <div className="col-md-7 ps-md-5 py-md-5 pe-md-0 ps-4 py-4 pe-4">
                        <div className="pb-2 mb-2" style={{borderBottom: '1px solid #3c382f', fontFamily: 'roboto'}}>
                            <span className="h4">Weekly Astro With</span> <span className="h3" style={{fontWeight: 'bold'}}>Aparna Bose</span>
                        </div>
                        <blockquote className="py-2 h5">
                            <i>A peek into what the week looks like for your zodiac through relatable and candid tarot predictions</i>
                        </blockquote>
                        <div className='position-relative'>
                            <FontAwesomeIcon icon={faEnvelope} className={`${horoscopecss.roundedcircle} p-2 mr-1 text-white`} style={{backgroundColor:'#681614'}}/>
                            <Link href="mailto:aparna.bose@mid-day.com" className={horoscopecss.astrologistname}>aparna.bose@mid-day.com</Link>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src="https://www.mid-day.com/assets/images/horoscopeAparna.png" alt="Horoscope Image" className="pt-3"/>
                    </div>
                </div>
            </div>
            <div className="border-bottom mb-1 justify-content-between align-items-center d-md-flex pt-3 mb-3">
                <h2 className="color-black"> Horoscope for <span id="todaydate">: {format(selectedDate, 'dd MMMM')}</span></h2>
                <div className={horoscopecss.dflexct}>
                    <img src="https://www.mid-day.com/assets/images/Calendar-01.svg" className={horoscopecss.calendarct}/> 
                    
                    <DatePicker selected={selectedDate} onChange={handleDateChange}                dateFormat="dd MMMM"  className={`modify-calendar lifestylehoro placeholder ${horoscopecss.colorpurpulelight} border-0 w-50 hasDatepicker js-bound ${horoscopecss.sbold}`} placeholderText="25th August" id="Horoscopedatepicker"/>
                    <div className={horoscopecss.downbottom}>
                        <img className={horoscopecss.uidatepickertrigger}  src="https://www.mid-day.com/assets/images/dropdown-arrow-02.svg" alt="Select date" title="Select date" onClick={() => document.getElementById('Horoscopedatepicker').focus()} />
                    </div>
                </div>
            </div>
             
            {horoscopeArray && horoscopeArray.length > 0 ? (
                <div>
                    <div className="col-12 d-flex flex-wrap p-0 border-bottom border-mb-0 mt-3"> 
                    {horoscopeArray && horoscopeArray.length > 0 && horoscopeArray.slice(0,3).map((horoscopeItem, index) => (
                        <div className={`col-md-4 mb-2 border-mb-0 px-md-2 ${horoscopecss.borderright}`}> 
                            <div className='row'>
                                <div className='col-6'>
                                    <h4 className={`${horoscopecss.titlenewsheading} mb-0`}>{horoscopeItem.sign}</h4> 
                                </div>
                                <div className='col-6 text-right'>
                                    <h4 className={`${horoscopecss.fontsize10} ${horoscopecss.titlenewsheading} ms-2 mb-0`}> (Mar 21 - April 20)</h4>
                                </div>
                            </div>
                            
                            <div className="border text-center p-3 pt-4 pb-4 mb-2"> 
                                <img src={`${config.ASSETS_HOST}${smallFirstLetter(horoscopeItem.sign)}.jpg`} alt={horoscopeItem.sign}/> 
                            </div>
                            <span className='px-1' dangerouslySetInnerHTML={{ __html: horoscopeItem.value }}></span>
                            {/* Mobile Advertisement Start */}
                            <div className='d-block d-md-none'>
                                <div className='row mt-md-4 pt-md-3'>
                                    <div className='col-md-12'>
                                    <p className="advertisement-text text-center mt-1 mb-0">ADVERTISEMENT</p>
                                    <div className="add-300x250 mx-auto text-center mb-3"></div>
                                    </div>
                                </div>
                            </div>
                            {/*Mobile Advertisement End */}
                        </div>
                    ))}
                    </div>
                    <div className="col-12 d-flex flex-wrap p-0 border-bottom border-mb-0 mt-3"> 
                    {horoscopeArray && horoscopeArray.length > 0 && horoscopeArray.slice(3,6).map((horoscopeItem, index) => (
                        <div className={`col-md-4 mb-2 border-mb-0 px-md-2 ${horoscopecss.borderright}`}> 
                            <div className='row'>
                                <div className='col-6'>
                                    <h4 className={`${horoscopecss.titlenewsheading} mb-0`}>{horoscopeItem.sign}</h4> 
                                </div>
                                <div className='col-6 text-right'>
                                    <h4 className={`${horoscopecss.fontsize10} ${horoscopecss.titlenewsheading} ms-2 mb-0`}> (Mar 21 - April 20)</h4>
                                </div>
                            </div>
                            
                            <div className="border text-center p-3 pt-4 pb-4 mb-2"> 
                                <img src={`${config.ASSETS_HOST}${smallFirstLetter(horoscopeItem.sign)}.jpg`} alt={horoscopeItem.sign}/> 
                            </div>
                            <span className='px-1' dangerouslySetInnerHTML={{ __html: horoscopeItem.value }}></span>
                            {/* Mobile Advertisement Start */}
                            <div className='d-block d-md-none'>
                                <div className='row mt-md-4 pt-md-3'>
                                    <div className='col-md-12'>
                                    <p className="advertisement-text text-center mt-1 mb-0">ADVERTISEMENT</p>
                                    <div className="add-300x250 mx-auto text-center mb-3"></div>
                                    </div>
                                </div>
                            </div>
                            {/*Mobile Advertisement End */}
                        </div>
                    ))}
                    </div>
                    <div className="col-12 d-flex flex-wrap p-0 border-bottom border-mb-0 mt-3"> 
                    {horoscopeArray && horoscopeArray.length > 0 && horoscopeArray.slice(6,9).map((horoscopeItem, index) => (
                        <div className={`col-md-4 mb-2 border-mb-0 px-md-2 ${horoscopecss.borderright}`}> 
                            <div className='row'>
                                <div className='col-6'>
                                    <h4 className={`${horoscopecss.titlenewsheading} mb-0`}>{horoscopeItem.sign}</h4> 
                                </div>
                                <div className='col-6 text-right'>
                                    <h4 className={`${horoscopecss.fontsize10} ${horoscopecss.titlenewsheading} ms-2 mb-0`}> (Mar 21 - April 20)</h4>
                                </div>
                            </div>
                            
                            <div className="border text-center p-3 pt-4 pb-4 mb-2"> 
                                <img src={`${config.ASSETS_HOST}${smallFirstLetter(horoscopeItem.sign)}.jpg`} alt={horoscopeItem.sign}/> 
                            </div>
                            <span className='px-1' dangerouslySetInnerHTML={{ __html: horoscopeItem.value }}></span>
                            {/* Mobile Advertisement Start */}
                            <div className='d-block d-md-none'>
                                <div className='row mt-md-4 pt-md-3'>
                                    <div className='col-md-12'>
                                    <p className="advertisement-text text-center mt-1 mb-0">ADVERTISEMENT</p>
                                    <div className="add-300x250 mx-auto text-center mb-3"></div>
                                    </div>
                                </div>
                            </div>
                            {/*Mobile Advertisement End */}
                        </div>
                    ))}
                    </div>
                    <div className="col-12 d-flex flex-wrap p-0 border-bottom border-mb-0 mt-3"> 
                    {horoscopeArray && horoscopeArray.length > 0 && horoscopeArray.slice(9,12).map((horoscopeItem, index) => (
                        <div className={`col-md-4 mb-2 border-mb-0 px-md-2 ${horoscopecss.borderright}`}> 
                            <div className='row'>
                                <div className='col-6'>
                                    <h4 className={`${horoscopecss.titlenewsheading} mb-0`}>{horoscopeItem.sign}</h4> 
                                </div>
                                <div className='col-6 text-right'>
                                    <h4 className={`${horoscopecss.fontsize10} ${horoscopecss.titlenewsheading} ms-2 mb-0`}> (Mar 21 - April 20)</h4>
                                </div>
                            </div>
                            
                            <div className="border text-center p-3 pt-4 pb-4 mb-2"> 
                                <img src={`${config.ASSETS_HOST}${smallFirstLetter(horoscopeItem.sign)}.jpg`} alt={horoscopeItem.sign}/> 
                            </div>
                            <span className='px-1' dangerouslySetInnerHTML={{ __html: horoscopeItem.value }}></span>
                            {/* Mobile Advertisement Start */}
                            <div className='d-block d-md-none'>
                                <div className='row mt-md-4 pt-md-3'>
                                    <div className='col-md-12'>
                                    <p className="advertisement-text text-center mt-1 mb-0">ADVERTISEMENT</p>
                                    <div className="add-300x250 mx-auto text-center mb-3"></div>
                                    </div>
                                </div>
                            </div>
                            {/*Mobile Advertisement End */}
                        </div>
                    ))}
                    </div> 
                </div>
            ) : (
                <div>No Data Available !!</div>
            )}
           
        </div>
        <div className='col-md-3 rhselement pt-2'>
          {/* Advertisement Start */}
            <div className='d-none d-md-block'>
                <div className='row'>
                    <div className='col-md-12'>
                    <p className="advertisement-text text-center mt-1 mb-0" style={{marginTop: '-23px !important'}}>ADVERTISEMENT</p>
                    <div className="add-300x250 mx-auto text-center mb-3"></div>
                    </div>
                </div>
            </div>
            {/* Advertisement End */}
            {/* Mid-Day Poll Start */}
           
            {/* POll Start */}
            
            <div className="d-flex justify-content-between align-items-center pt-2 pb-2 tab-header">
                <div className="left-inner-colm pb-0 mb-2 px-0">
                    <h2 className="d-md-inline mr-md-3 main-heading px-1">
                    <span className="main-headline-sidebar"></span>
                    <span className="px-2">Poll</span>
                    </h2>
                </div>
                <div>
                    <Link href="">
                    <Image
                        src={cta}
                        className="cta-position d-none d-md-block"
                    />
                    <Image
                        src={cta}
                        className="cta-position d-block d-md-none"
                    />
                    </Link>
                </div>
            </div>
            {data.rhs_data.poll_data && data.rhs_data.poll_data.length > 0 && (
            <div className='row px-3 pe-md-2'>
                <div className='col-md-12 px-md-1 px-0 ps-md-0'>
                    <div className={`${horoscopecss.borderMain} border py-2 px-2`}>
                        <h2 className="pollPera">{data.rhs_data.poll_data[0].title}</h2>
                        {data.rhs_data.poll_data &&
                            data.rhs_data.poll_data.length > 0 &&
                            data.rhs_data.poll_data[0].poll_option_data.map((item, index) => (
                                <div className="row align-items-center" key={index}>
                                {selectedOptionId == "" && (
                                    <div className="col-md-1 col-1">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        checked={item.isSelected}
                                        onChange={() =>
                                        handleOptionChange(
                                            data.rhs_data.poll_data[0].id,
                                            item.answer_label
                                        )
                                        }
                                    />
                                    </div>
                                )}
                                <div
                                    className={`${
                                    selectedOptionId == ""
                                        ? "col-md-10 col-9 mx-md-1"
                                        : "col-11"
                                    } mx-3 mb-3 py-2`}
                                    style={{ border: "1px solid #46C1F2" }}
                                >
                                    <div className="progressHead d-flex justify-content-between">
                                    <span className={horoscopecss.progressheadpera}>
                                        {item.answer_label}
                                    </span>
                                    {selectedOptionId != "" && (
                                        <span className={horoscopecss.progresspercent}>
                                        {roundOfValue(item.percentage)}%
                                        </span>
                                    )}
                                    </div>
                                    {selectedOptionId != "" && (
                                    <div
                                        className="progress"
                                        style={{ height: "10px" }}
                                    >
                                        <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{
                                            width: `${roundOfValue(item.percentage)}%`,
                                            backgroundColor: "rgb(36, 83, 167)",
                                        }}
                                        aria-valuenow={roundOfValue(item.percentage)}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        ></div>
                                    </div>
                                    )}
                                </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            )}
            {/* Mid-Day Poll End */}
            {/* Quiz Start */}
            <div className='className="row pt-3 pe-0 ps-0'>
                <div className="d-flex justify-content-between align-items-center pt-2 tab-header ps-2 pe-md-0 pe-2">
                    <div className="left-inner-colm pb-0 mb-2">
                        <h2 className="d-md-inline mr-md-3 main-heading"><span className='main-headline-sidebar'></span><span className='px-2'>Quiz</span></h2>
                    </div>
                    <div className="">
                        <Link href="">
                        <Image src={cta} className='cta-position'/>
                        </Link>
                    </div>
                </div>
                {data.rhs_data.quiz_data && data.rhs_data.quiz_data.length > 0 ? (
                    data.rhs_data.quiz_data.map((item, index) => (
                    <div className='col-md-12 ps-2 pe-md-0 pe-2'>
                        <Link href={item.URL}>
                            <div className="border text-center p-3">
                                <p className={horoscopecss.categoryquizepera}>{item.Homeheadline}</p>
                                <button className={horoscopecss.categoryplaynow}>Play Now</button>
                            </div>
                        </Link>
                    </div>
                    ))
                ) : (
                    <div>No Data Available !!</div>
                )}
            </div>
            {/* Quiz End */}
            </div>
        </div>
  )
}

export default Horoscope