import React from "react";
import ResultHeader from "../Result/ResultHeader";
import ResultSearchBtn from "../Result/ResultSearchBtn";
import ResultList from "../Result/ResultList";

const ResultPage = () => {
  return (
    <div>
      <ResultHeader></ResultHeader>
      <ResultSearchBtn></ResultSearchBtn>
      <ResultList></ResultList>
    </div>
  );
};

export default ResultPage;
