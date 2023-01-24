import React, { useState } from "react";
import ReactTree from "../components/ReactTree";
import { Button } from "@mui/material";
import tree from "../shared/tree";
import RootFactory from "../components/RootFactory";

const randomChildCount = (max) => {
  return Math.floor(Math.random() * max);
}

const createChild = (index) => {
  console.log({ nodeId: index + 50, label: `Child: ${index}` });
  return { nodeId: index + 50, label: `Child: ${index}` };
}

const generateChildren = () => {
  const numberOfChildren = randomChildCount(15);
  let childArray = [];
  for (let i = 1; i <= numberOfChildren; i++) {
    const newChild = createChild(i);
    childArray.push(newChild);
  }
  return childArray;
}

const HomePage = () => {
  const [treeData, setTreeData] = useState(tree);

  const updateTreeState = (updateTree) => {
    let newTreeData = [...updateTree];
    newTreeData[0].children = generateChildren(newTreeData);
    console.log(newTreeData);
    setTreeData(newTreeData);
  }
  console.log({ treeData });

  return (
    <>
      <ReactTree displayTree={treeData} />
      <Button onClick={ () => {updateTreeState(treeData)} }>
        Generate Child
      </Button>
      <RootFactory />
    </>
  );
}

export default HomePage;