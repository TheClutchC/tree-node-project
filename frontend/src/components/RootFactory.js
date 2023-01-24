import React, { useState } from "react";

// I need to incorporate if statements that perform an 
// action based on the state of a factory, if it exists or not, if
// it has children, etc.

function RootFactory() {
  const [factories, setFactories] = useState([{name: "Factory 1", numbers: []}]);

  const addFactory = () => {
    setFactories([...factories, {name: `Factory ${factories.length + 1}`, numbers: []}]);
  }

  const editFactory = (index) => {
    // function to handle editing factory name
  }

  const deleteFactory = (index) => {
    // function to handle deleting factory
  }

  const generateNumbers = (index) => {
    // function to handle generating random numbers for specific factory
  }

  const editParameters = (index) => {
    // function to handle editing number generation parameters
  }

  const regenerateNumbers = (index) => {
    // function to handle regenerating numbers for specific factory
  }

  const deleteNumbers = (index) => {
    // function to handle deleting numbers for specific factory
  }

  return (
    <div>
      <div 
        style={{ 
          backgroundColor: "lavender", 
          margin: 5,
          padding: 5 
        }}
      >
        <strong>
          <div 
            style={{ 
              display: "flex", 
              justifyContent: "center"
            }}
          >
            Root Factory
          </div>
        </strong>
      </div>
      <button style={{ backgroundColor: "lightgreen" }} onClick={addFactory}>Add Factory +</button>
      {factories.map((factory, index) => (
        <div key={index}>
          <div>{factory.name}</div>
          <button style={{ backgroundColor: "yellow" }} onClick={() => editFactory(index)}>Edit Factory</button>
          <button style={{ backgroundColor: "coral" }} onClick={() => deleteFactory(index)}>Delete Factory</button>
          <button style={{ backgroundColor: "lightgreen" }} onClick={() => generateNumbers(index)}>Generate Numbers</button>
          <button style={{ backgroundColor: "yellow" }} onClick={() => editParameters(index)}>Edit Parameters</button>
          <button style={{ backgroundColor: "lightblue" }} onClick={() => regenerateNumbers(index)}>Regenerate Numbers</button>
          <button style={{ backgroundColor: "coral" }} onClick={() => deleteNumbers(index)}>Delete Numbers</button>
          <div>
            {factory.numbers.map((number, index) => (
              <div key={index}>
                <input type="checkbox" /> {number}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RootFactory;