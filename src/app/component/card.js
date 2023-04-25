export default function Card({komik}) {
    const text = komik.title;
    const desc = komik.desc;
    return (
        <div className="col-lg-4 col-md-6 rounded">
          <div className="card m-2 rounded">
            <img className="card-img-top" height={250} src={komik.image} />
            <div className="card-body">
              <h5 className="card-title">{text.length > 30 ? text.slice(0,30) : text}</h5>
              <p className="card-text">{desc.length > 80  ? desc.slice(0,80)+'...' : text}</p>
              <a href="#" className="btn btn-dark btn-sm btn-block">Baca Sekarang!</a>
            </div>
          </div>
        </div>
    )
}