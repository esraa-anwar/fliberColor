const colors = [ 'green', "red", "rgba(133,122,200)", "#f15025" ];
const btn = document.getElementById( "btn" );
const color = document.querySelector( ".color" );
btn.addEventListener( "click", function ()
{
    const number = getRandomNumber();
    document.body.style.backgroundColor = colors[ number ]
    color.textContent = colors[ number ]

} )
const getRandomNumber = function ()
{
    return Math.floor( Math.random() * colors.length )
}