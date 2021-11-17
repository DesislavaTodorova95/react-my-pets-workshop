import {NavLink } from 'react-router-dom'

const CategoryNavigation = ({
})=>{
return( <nav className="navbar">
<ul>
    <li><NavLink activeClassName="nav-link-selected" to="/categories/all">All</NavLink></li>
    <li><NavLink activeClassName="nav-link-selected" to="/categories/cats">Cats</NavLink></li>
    <li><NavLink activeClassName="nav-link-selected" to="/categories/dogs">Dogs</NavLink></li>
    <li><NavLink activeClassName="nav-link-selected" to="/categories/Parrots">Parrots</NavLink></li>
    <li><NavLink activeClassName="nav-link-selected" to="/categories/Reptiles">Reptiles</NavLink></li>
    <li><NavLink activeClassName="nav-link-selected" to="/categories/Other">Other</NavLink></li>
</ul>
<style jsx>{`
    .nav-link-selected{
     background-color: lightgreen !important
    }`}
</style>
</nav>)
}
export default CategoryNavigation;