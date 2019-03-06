const nav_1 = document.getElementById('btn1');
const nav_2 = document.getElementById('btn2');
const nav_3 = document.getElementById('btn3');
const heading = document.getElementById('heading');
const lines = document.getElementById('lines');
const contact = document.getElementById('contact');
const about = document.getElementById('about');
const change1 = () => {
    nav_1.className='topelmt active';
    nav_2.className='topelmt';
    nav_3.className='topelmt';
    heading.innerHTML='Electrolux <br> Sale and Service center';
    heading.className='heading heading1';
    lines.className='lines';
    lines.style.zIndex=2;
    contact.className='nope';
    about.className='nope';
}
const change2 = () => {
    nav_2.className='topelmt active';
    nav_1.className='topelmt';
    nav_3.className='topelmt';
    heading.innerText='About';
    heading.className='heading heading2';
    lines.className='nope';
    lines.style.zIndex=-2;
    contact.className='nope';
    about.className='about';
}
const change3 = () => {
    nav_3.className='topelmt active';
    nav_2.className='topelmt';
    nav_1.className='topelmt';
    heading.innerText='Contact';
    heading.className='heading heading3';
    lines.className='nope';
    lines.style.zIndex=-2;
    contact.className='contact';
    about.className='nope';
}