const Pet = ({
    
})=>{
return(<li className="otherPet">
<h3>Name: Kiro</h3>
<p>Category: Dog</p>
<p className="img">
  <img src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bbde.png" />
</p>
<p className="description">This is my dog Kiro</p>
<div className="pet-info">
  <a href="#">
    <button className="button">
      <i className="fas fa-heart"></i> Pet
    </button>
  </a>
  <a href="#">
    <button className="button">Details</button>
  </a>
  <i className="fas fa-heart"></i> <span> 4</span>
</div>
</li>)
}
export default Pet;