import React from "react";
import { useAppSelector } from "../../../../xmasDroppe/src/Redux/hooks";
import ChildrenImage from "../../../../xmasDroppe/src/components/ChildrenImage/ChildrenImage";
import Discarded from "../../../../xmasDroppe/src/components/Discarded/Discarded";

const MyCartDisApproved = () => {
  const allDisApproved = useAppSelector(
    (state) => state.childrens.ChildrenDiscardedItems
  ); // Redux Disapproved Childen list

  return (
    <div>
      {allDisApproved.map((el) => {
        return (
          <div key={el.userId}>
            <ChildrenImage name={el.userId} />
            <Discarded discardedItems={el.products} />
          </div>
        );
      })}
    </div>
  );
};

export default MyCartDisApproved;
