let productCount = 0
import imageUrl from '../images/car-01.jpg'
const style = {
  padding: '0px 20px',
  fontSize: 14,
}

function displayFormattedProductCount() {
  return productCount > 0 ? productCount : 'Zero'
}

function Products() {
  return (
    <ul className="list-group shadow">
      <li className="list-group-item">
        <div className="d-flex">
          <div>
            <h5 className="mb-1">title</h5>
            <p className="mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur hic quos magnam doloribus cum iure perspiciatis,
              minima architecto pariatur deserunt, harum, delectus sit dolorum
              recusandae! Autem cum quas facilis adipisci.
            </p>
            <div className="d-flex align-items-center justify-content-start mt-1">
              <small className="" style={{ marginRight: 30 }}>
                $abc.XY
              </small>
              <button className="btn btn-primary">-</button>
              <span style={{ padding: '0px 14px', fontSize: 13 }}>
                {displayFormattedProductCount()}
              </span>
              <button className="btn btn-primary">+</button>
            </div>
          </div>
          <img
            src={imageUrl}
            alt="generic placeholder image"
            width="200"
            className=""
          />
        </div>
      </li>
    </ul>
  )
}

export default Products
