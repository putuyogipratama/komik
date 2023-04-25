import Navbar from "./component/page"
import Card from "./component/card"

export default async function Home() {
  const res = await fetch('http://komiks.pratamastudio.skom.id/api/data/1');
  const data = await res.json();

  return (
    <>
      <Navbar />
      {/* <div className='mb-4' style={{ background: "#e9e9e9" }}></div> */}
      <div className='row pt-3' style={{ background: "#e9e9e9" }}>
        {data.map(item => (
          <Card komik={{
            title: item.title,
            desc: item.desc,
            image: item.image,
          }} />
        ))}
      </div>
    </>
  )
}
