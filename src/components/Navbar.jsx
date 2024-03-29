import React from 'react'
import '../App.css';

export default function Navbar() {
  return(  
  <div class="color color-lght">
    <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
    <a class="navbar-brand" href="/">Fashnica</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/">Skin</a>
        <a class="nav-link" href="/">Hair</a>
        <a class="nav-link" href="/">Makeup</a>
      </div>
      <form class="d-flex">
      <input class="btn-2 form-control me-2" type="search" placeholder="Search" aria-label="Search" /> 
        <button class="btn btn-outline-danger" type="submit">Search </button>
        
      </form>
      </div>
  </div>
</nav>
</div>
);
}
