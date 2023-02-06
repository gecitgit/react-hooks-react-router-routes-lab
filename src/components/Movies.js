import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        <h3>Name: Doctor Strange</h3>
        <p>Time: 115</p>
        <p>Genres:</p>
        <ul>
          <li>
            Action
          </li>
          <li>
            Adventure
          </li>
          <li>
            Fantasy
          </li>
        </ul>
      </div>
      <div>
        <h3>Name: Trolls</h3>
        <p>Time: 92</p>
        <p>Genres:</p>
        <ul>
          <li>
            Animation
          </li>
          <li>
            Adventure
          </li>
          <li>
            Comedy
          </li>
          <li>
            Family
          </li>
          <li>
            Fantasy
          </li>
        </ul>
      </div><div>
        <h3>Name: Jack Reacher: Never Go Back</h3>
        <p>Time: 118</p>
        <p>Genres:</p>
        <ul>
          <li>
            Action
          </li>
          <li>
            Adventure
          </li>
          <li>
            Crime
          </li>
          <li>
            Mystery
          </li>
          <li>
            Thriller
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Movies;
