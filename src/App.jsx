import "./App.css";

function App() {
  const num_komp=7;
console.log(num_komp);
let x, y;
x=2; y=3;
console.log(num_komp, x,y);
let w1=num_komp*x*x*x+1-num_komp*y;
let w2=2*x+num_komp*num_komp-4*y*y;
let w3=3*y*y-num_komp*x*x*y-7*y;
let w4=2*x*y+num_komp*x*y;
let w5=3*x*x+num_komp*y+2;
  return (
<>
<div className="div" >
  <p className="p">
   Komputer numer - {num_komp}
  </p>
  </div>
  <br />
<div className="div1">
{num_komp}*1={num_komp*1}<br />
{num_komp}*2={num_komp*2}<br />
{num_komp}*3={num_komp*3}<br />
{num_komp}*4={num_komp*4}<br />
{num_komp}*5={num_komp*5}<br />
{num_komp}*6={num_komp*6}<br />
{num_komp}*7={num_komp*7}<br />
{num_komp}*8={num_komp*8}<br />
{num_komp}*9={num_komp*9}<br />
{num_komp}*10={num_komp*10}<br />
</div>
<br />
<div className="div2">
<ul>
<li><p>{num_komp}x<sup>3</sup>+1-{num_komp}y={w1}</p></li>
<li> <p>2x+{num_komp}<sup>2</sup>-4y<sup>2</sup>={w2}</p></li>
<li><p>3y<sup>2</sup>-{num_komp}x<sup>2</sup>y-7y={w3}</p></li>
<li><p>2xy+{num_komp}xy={w4}</p></li>
<li> <p>3x<sup>2</sup>+{num_komp}y+2={w5}</p>
</li></ul>
</div>

    </>
  );
}

export default App;
