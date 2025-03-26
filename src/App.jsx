import "./App.css";

function App() {


console.log("tekst", 5+6);
const a=3;
let b, c=6, d;
b=1;
d=b+c*a;
let e=a+b*c;
let k=a*a*a-1;
console.log(e, d, k);
const a1=7;
const x=2, y=3;
console.log(a1, x,y);
let w1=x*x*x+x*y*y-a1;
console.log(w1);



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
   równianie = {e}
  </p>
  
</div>
<br />
<div className="div">
7*1={a1*1}<br />
7*2={a1*2}<br />
7*3={a1*3}<br />
7*4={a1*4}<br />
7*5={a1*5}<br />
7*6={a1*6}<br />
7*7={a1*7}<br />
7*8={a1*8}<br />
7*9={a1*9}<br />
7*10={a1*10}<br />
</div>
<br />
<div className="div">
<p>x<sup>3</sup>+xy<sup>2</sup>-{a1}={w1}</p>
</div>
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
    </>
  );
}

export default App;
