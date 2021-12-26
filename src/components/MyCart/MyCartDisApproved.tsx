import React from "react";
import { useAppSelector } from "../../../../droppe-xmas/src/Redux/hooks";
import ChildrenImage from "../../../../droppe-xmas/src/components/ChildrenImage/ChildrenImage";
import Discarded from "../../../../droppe-xmas/src/components/Discarded/Discarded";

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
