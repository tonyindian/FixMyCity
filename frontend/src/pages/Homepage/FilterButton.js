import React, {useState} from 'react';
import { ReportButton } from './Styled';
import CategoryBox from './CategoryBox';


const FilterButton = () => {

   const [toggleFilter, setToggleFilter] = useState(false)

    return (
        <>
            {
                toggleFilter && (
                    <CategoryBox></CategoryBox>
                    
                )
            }
            <ReportButton onClick={() => setToggleFilter(!toggleFilter)} name="Report">Filter</ReportButton>
        </>
    
    )

}
export default FilterButton