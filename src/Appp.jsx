import React from "react";
import {add,sub,mult,div,} from './calci'

function Appp()
{
  return(
<>
  <ul>
  <li>Sum of two number is{add(5,6)} </li>
  <li>Product of two number is{sub(5,6)} </li>
  <li>Division of two number is{div(5,6)} </li>
  <li>Multiply of two number is{mult(5,6)} </li>
  </ul>
  </>
  );
}

export default Appp;