import styles from "../../styles/Home.module.css";
import SportsComponets from "../../src/components/categorycomponent/index";
import axios from 'axios';
import { config } from '../../next.config.js';
const Category = ({initialCategoryData,categoryName}) => {
  return (
    <div className={`{styles.container} mb-3`}>
      <SportsComponets categoryData={initialCategoryData} categoryName={categoryName} videoTagName="Sit With Hitlist" upperBannerTagName="" />
    </div>
  );
}

export async function getServerSideProps(context) {
  try { 
    let formatdata = new FormData();
    formatdata.append('category_name', 'sports');
    formatdata.append('sub_category_name', '');
    formatdata.append('flag', 'category');
    const { data: CategoryData } = await axios.post(`${config.API_HOST}getDataByCategorywise`, formatdata);
    return {
      props: {
        initialCategoryData: CategoryData,
        categoryName: 'Sport',
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialCategoryData: [],
        categoryName: '',
      },
    };
  }
}

export default Category;
