import Horoscope from "../src/components/HoroscopeComponent/index";
import axios from 'axios';
import { config } from '../next.config.js';
const Hooscope = ({ initialHoroscopeData }) => {
  return(
    <div className="container">
      <Horoscope data={initialHoroscopeData}/>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    let formatdata = new FormData();
    formatdata.append('filter_date', '2024-08-30');
    const { data: HoroscopeData } = await axios.post(`${config.API_HOST}getHoroscopeListDateWise`, formatdata);
    return {
      props: {
        initialHoroscopeData: HoroscopeData
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialHoroscopeData: [],
      },
    };
  }
}
export default Hooscope;