import axios from 'axios'
import { config } from '../../../next.config.js';
import Latestnews from '../../../src/components/Subcategorycomponent/latestnews';
import Photos from '../../../src/components/Subcategorycomponent/photos';
import Opinions from '../../../src/components/Subcategorycomponent/opinions';
import Videos from '../../../src/components/Subcategorycomponent/videos';
import Newsarticles from '../../../src/components/Subcategorycomponent/newsarticles';
const MumbaiCrimeNews = ({initialSubcategoryData, categoryName, subcategoryName}) => {
  return(
    <div className="container pt-4 pt-md-0 px-md-2 px-0">
        <Latestnews initialSubcategoryData ={initialSubcategoryData} categoryName={categoryName} subcategoryName={subcategoryName} />
        <Photos subcategoryName={subcategoryName} categoryName={categoryName} subcategoryId={initialSubcategoryData.subcategory_data[0].SubcatID}/>
        <Opinions categoryName={categoryName} subcategoryName={subcategoryName} />
        <Videos categoryName={categoryName} subcategoryName={subcategoryName} subcategoryId={initialSubcategoryData.subcategory_data[0].SubcatID} />
        <Newsarticles categoryName={categoryName} subcategoryName={subcategoryName} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const fullUrl = context.resolvedUrl;
  const urlPath = fullUrl.split('?')[0];
  const [category_name, sub_category_name] = urlPath.split('/').filter(Boolean); 
  try { 
    let formatdata = new FormData();
    formatdata.append('category_name', category_name);
    formatdata.append('sub_category_name', sub_category_name);
    formatdata.append('flag', '');
    formatdata.append('cur', '0');
    formatdata.append('max', '12');
    const { data: SubcategoryData } = await axios.post(`${config.API_HOST}getDataBySubCategorywise`, formatdata);
    return {
      props: {
        initialSubcategoryData: SubcategoryData,
        categoryName: category_name.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), 
        subcategoryName: sub_category_name.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), 
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialSubcategoryData: [],
        categoryName: "", 
        subcategoryName: "", 
      },
    };
  }
}

export default MumbaiCrimeNews;

