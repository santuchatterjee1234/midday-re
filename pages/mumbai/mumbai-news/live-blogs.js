import axios from 'axios'
import { config } from '../../../next.config.js';
import Liveblogcomponent from '../../../src/components/Subcategorycomponent/articlesphotosvideoscomponent';
const Articles = ({initialSubcategoryListingData, categoryName, subcategoryName}) => {
  return(
    <div className="container pt-4 pt-md-0 px-md-2 px-0 mb-5">
       <Liveblogcomponent initialSubcategoryListingData={initialSubcategoryListingData} categoryName={categoryName} subcategoryName={subcategoryName} type='Live Blogs'/>
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
    formatdata.append('flag', 'Live Blogs');
    formatdata.append('cur', '0');
    formatdata.append('max', '12');
    const { data: SubcategoryListingData } = await axios.post(`${config.API_HOST}getDataBySubCategorywise`, formatdata);
    return {
      props: {
        initialSubcategoryListingData: SubcategoryListingData,
        categoryName: category_name.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), 
        subcategoryName: sub_category_name.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), 
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialSubcategoryListingData: [],
        categoryName: '',
        subcategoryName: '',
      },
    };
  }
}

export default Articles;