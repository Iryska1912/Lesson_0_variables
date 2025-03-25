import "./App.css";

function App() {


console.log("tekst", 5+6);
const a=3;
let b, c=6, d;
b=1;
d=b+c*a;
let e=a+b*c;
console.log(e, d);

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
<p>log(a=b)</p>

<p>
  {e}
</p>
<div className="div" >
  <p className="p">
   równianie = {e}
  </p>
</div>



    </>
  );
}

export default App;
