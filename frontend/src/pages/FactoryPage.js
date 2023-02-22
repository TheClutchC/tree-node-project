import React, { useState, useEffect } from "react";
import ReactTree from "../components/ReactTree";
import { Button } from "@mui/material";
import tree from "../shared/tree";
import RootFactory from "../components/RootFactory";

const randomChildCount = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createChild = (index) => {
  console.log({ nodeId: index + 0, label: `Child: ${index}` });
  return { nodeId: index + 0, label: `Child: ${index}` };
}

const generateChildren = () => {
  const numberOfChildren = randomChildCount(6, 9);
  let childArray = [];
  for (let i = 1; i <= numberOfChildren; i++) {
    const newChild = createChild(i);
    childArray.push(newChild);
  }
  return childArray;
}

const FactoryPage = () => {
  const [treeData, setTreeData] = useState(tree);
  const [data, setData] = useState();

  const updateTreeState = (updateTree) => {
    let newTreeData = [...updateTree];
    newTreeData[0].children = generateChildren(newTreeData);
    console.log(newTreeData);
    setTreeData(newTreeData);
  }
  console.log({ treeData });

  useEffect(() => {
    fetch(`/api`)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
    <div className="FactoryPage">
      <ReactTree displayTree={treeData} />
      <Button onClick={ () => {updateTreeState(treeData)} }>
        Generate Child
      </Button>
      <RootFactory />
      <p>{data}</p>
    </div>
    </>
  );
}

export default FactoryPage;