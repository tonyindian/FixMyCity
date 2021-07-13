import React, {useState} from 'react';
import { ReportButton } from './Styled';





const Filterpage = () => {

   const [toggleFilter, setToggleFilter] = useState(false)

    return (
        <>
            {
                toggleFilter && (
                    <ReportButton name="Report">Filter</ReportButton>
                )
            }
            <ReportButton onClick={() => setToggleFilter(!toggleFilter)} name="Report">Filter</ReportButton>
        </>
    
    )

}
export default Filterpage