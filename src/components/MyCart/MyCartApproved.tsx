import React from "react";

import { useAppSelector } from "../../../../droppe-xmas/src/Redux/hooks";
import Approved from "../../../../droppe-xmas/src/components/Approved/Approved";
import ChildrenImage from "../../../../droppe-xmas/src/components/ChildrenImage/ChildrenImage";

const MyCartApproved = () => {
  const allApproved = useAppSelector(
    (state) => state.childrens.ChildrenApprovedItems
  ); // Redux Approved Childen list

  return (
    <div>
      {allApproved.map((el) => {
        return (
          <div key={el.userId}>
            {<ChildrenImage name={el.userId} />}

            <Approved approvedItems={el.products} />
          </div>
        );
      })}
    </div>
  );
};

export default MyCartApproved;
