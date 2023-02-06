import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>
        <h3>Name: Scott Derrickson</h3>
        <p>Movies:</p>
        <ul>
          <li>Doctor Strange</li>
          <li>Sinister</li>
          <li>The Exorcism of Emily Rose</li>
        </ul>
      </div>
      <div>
        <h3>Name: Mike Mitchell</h3>
        <p>Movies:</p>
        <ul>
          <li>Trolls</li>
          <li>Alvin and the Chipmunks: Chipwrecked</li>
          <li>Sky High</li>
        </ul>
      </div>
      <div>
        <h3>Name: Edward Zwick</h3>
        <p>Movies:</p>
        <ul>
          <li>Jack Reacher: Never Go Back</li>
          <li>Blood Diamon</li>
          <li>The Siege</li>
        </ul>
      </div>
    </div>
  )
}

export default Directors;
