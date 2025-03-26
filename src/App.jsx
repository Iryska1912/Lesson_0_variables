import "./App.css";

function App() {


console.log("tekst", 5+6);
const a=3, komp=10;
let b, c=6, d;
b=1;
let a2=2*a;
d=b+c*a;
let e=a+b*c;
let k=a*a*a-1;
// console.log(e, d, k);
const a1=7;
const x=2, y=3;
console.log(a1, x,y);
let w1=x*x*x+x*y*y-a1;
console.log(w1);
console.log(a2);
let v1=komp*x*x*x+1-komp*y;




  return (

    <>
      <p>Mamy 3 typy danych</p>
      <ul>
        <li>variables</li>
        <li>arrays</li>
        <li>objects</li>
      </ul>
<p>const a=3;</p>
<p>let b,d, c=6; </p>
<p>b=6; c=7;</p>
<p>d=b+c*a</p>
<p>lub let e=a+b*c</p>
<p>w części dla java piszemy 
console.log () lub log - dla wyświetlania czegoś w konsole </p>
<p>log(a+b)</p>
<p>
  {e}
</p>
<div className="div" >
  <p className="p">
   równianie = {komp}
  </p>
  
</div>
<br />
<div className="div">
{komp}*1={komp*1}<br />
{komp}*2={komp*2}<br />
{komp}*3={komp*3}<br />
{komp}*4={komp*4}<br />
{komp}*5={komp*5}<br />
{komp}*6={komp*6}<br />
{komp}*7={komp*7}<br />
{komp}*8={komp*8}<br />
{komp}*9={komp*9}<br />
{komp}*10={komp*10}<br />
</div>
<br />
<div className="div">
<p>x<sup>3</sup>+xy<sup>2</sup>-{a1}={w1}</p>
</div>
<br />
<p>to równianie = {a2}</p>
<br/>
<div className="div">
<ul>
<li><p>Nx<sup>3</sup>+1-Ny=</p></li>
<li> <p>2x+3N-4y<sup>2</sup>=</p></li>
<li><p>x<sup>N</sup>-2xy<sup>N</sup>+100=</p></li>
<li><p>3y<sup>2</sup>-Nx<sup>2</sup>y-7y=</p></li>
<li><p>2xy+Nxy=</p></li>
<li> <p>3x<sup>2</sup>+Ny+2=</p>
</li></ul>
  
 
  
  
  
 
</div>
<p className="p.1">Coś10x<sup>3</sup>+1-10y={v1}</p>
    </>
  );
}

export default App;
