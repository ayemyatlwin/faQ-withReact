import React from 'react'

function FaqNav() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light mb-3">
  <div class="container-fluid">
    <a class="navbar-brand text-primary" href="#">Device4u</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link text-primary " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-primary" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-primary active" href="#">FaQ</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    <h1 class="text-primary text-center display-4 fw-bold my-2">Frequently asked questions(FaQ)</h1>
    
    </>
  )
}

export default FaqNav
