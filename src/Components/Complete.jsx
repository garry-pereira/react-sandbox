import Navigation from './Navigation'
import Accordian from './Accordian'

const Products = () => {
  return (
    <>
      {/* NAVIGATION */}
      <Navigation />
      {/* END OF NAVIGATION */}
      <br />
      {/* ACCORDIAN */}
      <Accordian />
      {/* END OF ACCORDIAN */}
      <br />
      {/* FORM */}
      <label
        htmlFor="exampleDataList"
        className="form-label"
        style={{ color: 'white' }}
      >
        Datalist example
      </label>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
      />
      <datalist id="datalistOptions">
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Seattle" />
        <option value="Los Angeles" />
        <option value="Chicago" />
      </datalist>
      {/* END OF FORM */}
      <br />
      {/* SCROLL */}
      <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              First
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              Second
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">
                  Third
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">
                  Fourth
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading5">
                  Fifth
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabindex="0"
      >
        <h4 id="scrollspyHeading1">First heading</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          quos, beatae quia magni accusamus tenetur, deserunt natus rerum at
          repellendus quisquam magnam non? Obcaecati deserunt vero et culpa eos
          ab autem quaerat cupiditate tempora odit! Repellendus iure possimus
          eaque aliquam?
        </p>
        <h4 id="scrollspyHeading2">Second heading</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          alias repellendus earum ullam excepturi laboriosam corrupti
          laudantium! Voluptatibus reprehenderit perferendis laboriosam, est
          adipisci voluptatem mollitia placeat vel sint quibusdam, officiis
          pariatur omnis sit temporibus ratione! Velit non eveniet perspiciatis
          suscipit?
        </p>
        <h4 id="scrollspyHeading3">Third heading</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          facere fugit eveniet mollitia nulla sapiente consequatur, rerum dolor
          hic fuga repellendus vel repudiandae corporis recusandae atque ab
          omnis distinctio non sunt, ullam voluptatibus nesciunt aspernatur
          dolore assumenda. Amet mollitia non voluptas impedit? Voluptatum
          assumenda, quaerat error aliquam veniam quia. Eos.
        </p>
        <h4 id="scrollspyHeading4">Fourth heading</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          fugiat consequatur tenetur. Maxime, eaque ullam! Amet, ipsa! Corporis,
          ex. Dignissimos, dolorem beatae unde ex neque, recusandae consectetur
          incidunt molestias atque vitae obcaecati nisi ad aliquid voluptate non
          repudiandae libero laborum nesciunt autem! Doloribus repellat saepe
          voluptatum maiores nobis totam distinctio, veritatis incidunt rerum
          suscipit illum iure nesciunt repellendus earum! Voluptatem.
        </p>
        <h4 id="scrollspyHeading5">Fifth heading</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          accusamus optio eaque ut sequi quae quidem aliquam exercitationem
          libero inventore rerum harum consequatur iusto illo temporibus, saepe
          accusantium culpa dolores velit ipsum et est non? Facilis libero, quas
          nisi unde adipisci tempora maxime saepe natus voluptas consequuntur
          beatae consequatur possimus eligendi alias, repellendus commodi dolor
          aliquid. Harum asperiores eum neque esse mollitia, reprehenderit
          tenetur beatae, nam illum alias quasi blanditiis?
        </p>
      </div>
      {/* END OF SCROLL */}
    </>
  )
}

export default Products
