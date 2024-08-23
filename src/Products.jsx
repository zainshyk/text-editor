import React from 'react'

export default function Products(props) {
  return (
    <>
    <div className='container'>
    <div class={`card text-center mt-4 mb-4 text-${props.mode==="light"?"black":"white"}`}>
  <div class={`card-header bg-${props.mode==="light"?"light":"dark"}`}>
    Featured
  </div>
  <div class={`card-body bg-${props.mode==="light"?"light":"dark"}`}>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class={`card-footer bg-${props.mode==="light"?"light":"dark"} text-${props.mode==="light"?"black":"white"}`}>
    2 days ago
  </div>
</div>

<div class={`card text-center mt-4 mb-4 text-${props.mode==="light"?"black":"white"}`}>
  <div class={`card-header bg-${props.mode==="light"?"light":"dark"}`}>
    Featured
  </div>
  <div class={`card-body bg-${props.mode==="light"?"light":"dark"}`}>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class={`card-footer bg-${props.mode==="light"?"light":"dark"} text-${props.mode==="light"?"black":"white"}`}>
    2 days ago
  </div>
</div>
    </div>
    </>
  )
}